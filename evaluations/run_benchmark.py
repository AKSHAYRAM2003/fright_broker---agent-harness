"""
Benchmark Evaluation Runner for Multilingual Indian Freight Inquiries & Quotes.
Evaluates model accuracy across Kannada, Kanglish, Hindi, Hinglish, and English.
"""

import json
import os
import sys
from typing import Dict, List

# Ensure harness is on sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from harness.agents.intake_agent import LoadIntakeAgent


def run_benchmark():
    dataset_path = os.path.join(os.path.dirname(__file__), "datasets", "benchmark_cases.json")
    with open(dataset_path, "r", encoding="utf-8") as f:
        test_cases: List[Dict] = json.load(f)

    print("=" * 80)
    print(" 🚛 INDIAN FREIGHT AGENT HARNESS: MULTILINGUAL BENCHMARK EVALUATION")
    print(" Languages: Kannada (ಕನ್ನಡ) | Kanglish | Hindi (हिंदी) | Hinglish | English")
    print("=" * 80)

    total_cases = len(test_cases)
    passed_cases = 0

    language_stats = {}

    for case in test_cases:
        case_id = case["id"]
        lang = case["language"]
        case_type = case["type"]
        input_text = case["input_text"]
        expected = case["expected"]

        if lang not in language_stats:
            language_stats[lang] = {"total": 0, "passed": 0}
        language_stats[lang]["total"] += 1

        print(f"\n[Test {case_id}] ({lang} - {case_type})")
        print(f"  Input: \"{input_text[:75]}...\"" if len(input_text) > 75 else f"  Input: \"{input_text}\"")

        failures = []

        if case_type == "load_inquiry":
            result = LoadIntakeAgent.parse_load_inquiry(input_text)

            # 1. Completeness Check
            if result["is_complete"] != expected["is_complete"]:
                failures.append(f"is_complete: expected {expected['is_complete']}, got {result['is_complete']}")

            # 2. Vehicle Category Check
            if expected.get("vehicle_category") is not None:
                if result["vehicle_category"] != expected["vehicle_category"]:
                    failures.append(f"vehicle: expected {expected['vehicle_category']}, got {result['vehicle_category']}")

            # 3. Weight Check
            if expected.get("weight_tonnes") is not None:
                if result["weight_tonnes"] != expected["weight_tonnes"]:
                    failures.append(f"weight: expected {expected['weight_tonnes']}T, got {result['weight_tonnes']}T")

            # 4. Target Rate Check (if present)
            if expected.get("target_rate_inr") is not None:
                if result["target_rate_inr"] != expected["target_rate_inr"]:
                    failures.append(f"rate: expected ₹{expected['target_rate_inr']}, got ₹{result['target_rate_inr']}")

            # 5. Missing fields check for incomplete loads
            if not expected["is_complete"]:
                for mf in expected["missing_fields"]:
                    if mf not in result["missing_fields"]:
                        failures.append(f"missing_field: '{mf}' was expected in missing_fields")

        elif case_type == "transporter_quote":
            result = LoadIntakeAgent.parse_transporter_quote(input_text)

            if result["quoted_amount"] != expected["quoted_amount"]:
                failures.append(f"quoted_amount: expected {expected['quoted_amount']}, got {result['quoted_amount']}")
            if result["includes_tolls"] != expected["includes_tolls"]:
                failures.append(f"includes_tolls: expected {expected['includes_tolls']}, got {result['includes_tolls']}")
            if result["loading_unloading_charges"] != expected["loading_unloading_charges"]:
                failures.append(f"loading_charges: expected {expected['loading_unloading_charges']}, got {result['loading_unloading_charges']}")

        if not failures:
            passed_cases += 1
            language_stats[lang]["passed"] += 1
            print("  Status: ✅ PASS")
            if case_type == "load_inquiry":
                print(f"  Extracted: {result['origin']} -> {result['destination']} | {result['weight_tonnes']}T | {result['vehicle_category']}")
            else:
                print(f"  Extracted: Quote = ₹{result['quoted_amount']:,.2f} | Tolls included: {result['includes_tolls']} | Loading: ₹{result['loading_unloading_charges']}")
        else:
            print("  Status: ❌ FAIL")
            for f_msg in failures:
                print(f"    - {f_msg}")

    print("\n" + "=" * 80)
    print(" BENCHMARK ACCURACY SUMMARY")
    print("=" * 80)
    for lang, stats in language_stats.items():
        pct = (stats["passed"] / stats["total"]) * 100.0 if stats["total"] > 0 else 0.0
        print(f" • {lang.ljust(12)}: {stats['passed']}/{stats['total']} passed ({pct:.1f}%)")

    overall_pct = (passed_cases / total_cases) * 100.0
    print("-" * 80)
    print(f" OVERALL ACCURACY: {passed_cases}/{total_cases} ({overall_pct:.1f}%)")
    print("=" * 80)

    return passed_cases == total_cases


if __name__ == "__main__":
    success = run_benchmark()
    sys.exit(0 if success else 1)
