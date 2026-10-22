"""
Load Intake Agent for Indian Freight Brokerage.
Extracts structured load inquiries and transporter quotes from vernacular text.
Supports English, Kannada, Kanglish, Hindi, and Hinglish.
"""

import re
from typing import Dict, List, Optional
from ..core.schemas import LoadInquiry, VehicleCategory
from .lexicon import (
    detect_vehicle_category,
    extract_weight_tonnes,
    extract_rate_inr,
    extract_origin_destination,
    normalize_script_digits,
)


class LoadIntakeAgent:
    """
    Parses unstructured WhatsApp messages into verified domain models.
    """

    @classmethod
    def parse_load_inquiry(cls, raw_text: str) -> Dict:
        """
        Parses inbound load inquiry and identifies missing mandatory fields.
        """
        normalized_text = normalize_script_digits(raw_text)

        # 1. Origin and Destination
        origin, destination = extract_origin_destination(normalized_text)

        # 2. Vehicle Category
        vehicle_cat = detect_vehicle_category(normalized_text)

        # 3. Cargo Weight
        weight = extract_weight_tonnes(normalized_text)

        # 4. Target Freight Rate (if specified by shipper)
        target_rate = extract_rate_inr(normalized_text)

        # 5. Material / Cargo extraction heuristic
        material = cls._extract_material_hint(normalized_text)

        # 6. Check completeness
        missing_fields: List[str] = []
        if not origin:
            missing_fields.append("origin")
        if not destination:
            missing_fields.append("destination")
        if weight is None:
            missing_fields.append("weight_tonnes")
        if vehicle_cat is None:
            missing_fields.append("vehicle_category")

        is_complete = len(missing_fields) == 0

        # 7. Formulate clarification prompt if incomplete
        clarification_prompt = None
        if not is_complete:
            clarification_prompt = cls._generate_clarification_prompt(missing_fields)

        return {
            "origin": origin,
            "destination": destination,
            "weight_tonnes": weight,
            "vehicle_category": vehicle_cat.value if vehicle_cat else None,
            "material_type": material,
            "target_rate_inr": target_rate,
            "is_complete": is_complete,
            "missing_fields": missing_fields,
            "clarification_prompt": clarification_prompt,
            "raw_text": raw_text,
        }

    @classmethod
    def parse_transporter_quote(cls, raw_text: str) -> Dict:
        """
        Parses informal transporter quotes (text or transcribed audio notes).
        Detects base amount, tolls inclusion, and loading/unloading charges.
        """
        normalized_text = normalize_script_digits(raw_text.lower())

        # Extract quote rate
        quoted_amount = extract_rate_inr(normalized_text)

        # Detect loading/unloading/mamool charges (e.g. '500 mamool' or 'mamool 500')
        loading_charges = 0.0
        mamool_match = re.search(r'(?:(\d+)\s*(?:loading|mamool|batta|katav)|(?:loading|mamool|batta|katav)\s*(\d+))', normalized_text)
        if mamool_match:
            raw_digit = mamool_match.group(1) or mamool_match.group(2)
            try:
                loading_charges = float(raw_digit)
            except (ValueError, TypeError):
                pass

        # Detect toll inclusion
        includes_tolls = True
        if "toll extra" in normalized_text or "tolls extra" in normalized_text:
            includes_tolls = False

        return {
            "quoted_amount": quoted_amount,
            "includes_tolls": includes_tolls,
            "loading_unloading_charges": loading_charges,
            "raw_text": raw_text,
        }

    @staticmethod
    def _extract_material_hint(text: str) -> Optional[str]:
        """Extracts common commodities mentioned in freight chats."""
        commodities = [
            # English / Kanglish / Hinglish
            "pharmaceutical goods", "pharma", "fmcg", "steel coils", "iron rods",
            "iron rod", "auto parts", "maize seeds", "plastic goods", "machinery parts",
            "tiles", "garments", "leather goods",
            # Kannada
            "ಕಬ್ಬಿಣದ ರಾಡ್", "ದಿನಸಿ ಸಾಮಾನು", "ಗಾರ್ಮೆಂಟ್ಸ್",
            # Hindi
            "फार्मा", "कपड़ा", "लेदर गुड्स"
        ]
        text_lower = text.lower()
        for comm in commodities:
            if comm in text_lower:
                return comm
        return None

    @staticmethod
    def _generate_clarification_prompt(missing_fields: List[str]) -> str:
        """Drafts polite WhatsApp follow-up asking for missing parameters."""
        questions = []
        if "weight_tonnes" in missing_fields:
            questions.append("load weight (tonnes)")
        if "vehicle_category" in missing_fields:
            questions.append("required truck type (e.g. 10-Wheeler Taurus, 32ft MXL)")
        if "origin" in missing_fields:
            questions.append("exact pickup location")
        if "destination" in missing_fields:
            questions.append("delivery destination")

        return f"Please confirm {', and '.join(questions)} to dispatch truck options immediately."
