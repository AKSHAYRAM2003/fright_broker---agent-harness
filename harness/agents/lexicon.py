"""
Domain Lexicon and Vernacular Mapping Engine for Indian Road Freight.
Handles English, Kannada (ಕನ್ನಡ), Kanglish, Hindi (हिंदी), and Hinglish.
"""

import re
from typing import Dict, List, Optional, Tuple
from ..core.schemas import VehicleCategory


# Mapping of vernacular and script digits to standard ASCII digits
VERNACULAR_DIGITS_MAP = {
    # Kannada script
    '೦': '0', '೧': '1', '೨': '2', '೩': '3', '೪': '4',
    '೫': '5', '೬': '6', '೭': '7', '೮': '8', '೯': '9',
    # Devanagari script
    '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
    '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
}


def normalize_script_digits(text: str) -> str:
    """Replaces Kannada and Hindi script numbers with standard Arabic digits."""
    for char, digit in VERNACULAR_DIGITS_MAP.items():
        text = text.replace(char, digit)
    return text


# Vehicle synonyms across English, Hindi, Hinglish, Kannada, and Kanglish
VEHICLE_SYNONYMS: Dict[VehicleCategory, List[str]] = {
    VehicleCategory.LCV_SMALL: [
        "chota hathi", "chhota hathi", "chota haathi", "pickup", "bolero",
        "dost", "bada dost", "tata ace", "ಛೋಟಾ ಹಾತಿ", "पिकअप", "छोटा हाथी"
    ],
    VehicleCategory.ICV: [
        "14ft", "17ft", "19ft", "14 feet", "17 feet", "19 feet", "eicher 14",
        "eicher 17", "14 ft", "17 ft", "19 ft", "१४ फीट", "೧೪ ಅಡಿ"
    ],
    VehicleCategory.MCV_6W: [
        "6 wheeler", "6 chakka", "6w", "open truck", "६ चक्का", "೬ ಚಕ್ರ",
        "6 wheeler open", "6 chakka open"
    ],
    VehicleCategory.HCV_10W_TAURUS: [
        "10 wheeler", "10 chakka", "tauras", "taurus", "10w", "१० चक्का",
        "टॉरस", "೧೦ ಚಕ್ರ", "ಟಾರಸ್", "10 wheeler taurus", "10 wheeler tauras",
        "10 wheeler truck"
    ],
    VehicleCategory.HCV_MULTI_AXLE: [
        "12 wheeler", "14 wheeler", "12 chakka", "14 chakka", "12w", "14w",
        "multi axle truck", "೧೨ ಚಕ್ರ", "೧೪ ಚಕ್ರ", "१२ चक्का", "१४ चक्का"
    ],
    VehicleCategory.CONTAINER_32_SXL: [
        "32ft sxl", "32 feet single axle", "32 single axle", "32 sxl",
        "೩೨ ಅಡಿ ಸಿಂಗಲ್", "32 फ़ीट एसएक्सएल"
    ],
    VehicleCategory.CONTAINER_32_MXL: [
        "32ft mxl", "32 feet multi axle", "32 multi axle", "32 mxl",
        "32ft multi axle", "32 feet mxl", "32 फ़ीट एमएक्सएल", "೩೨ ಅಡಿ ಎಂಎಕ್ಸ್ಎಲ್",
        "32 mxl container", "32ft mxl container"
    ],
    VehicleCategory.CONTAINER_32_HQ: [
        "32ft hq", "32 high cube", "high cube container", "32 hq",
        "32ft high cube", "32 फीट हाई क्यूब", "೩೨ ಅಡಿ ಹೈ ಕ್ಯೂಬ್"
    ],
    VehicleCategory.CONTAINER_40_HQ: [
        "40ft", "40ft hq", "40 feet", "40 high cube", "४० फ़ीट", "೪೦ ಅಡಿ"
    ],
}


def detect_vehicle_category(text: str) -> Optional[VehicleCategory]:
    """Identifies vehicle category from vernacular text."""
    normalized = normalize_script_digits(text.lower())
    for category, synonyms in VEHICLE_SYNONYMS.items():
        for syn in synonyms:
            syn_norm = normalize_script_digits(syn.lower())
            if syn_norm in normalized:
                return category
    return None


def extract_weight_tonnes(text: str) -> Optional[float]:
    """Extracts cargo weight in metric tonnes from vernacular text."""
    normalized = normalize_script_digits(text.lower())

    # Patterns like "14 MT", "16 ton", "16T", "16 tonnes", "1.5 ton", "೧೬ ಟನ್", "12 टन"
    patterns = [
        r'(\d+(?:\.\d+)?)\s*(?:mt|tons?|tonnes?|t\b|टन|ಟನ್)',
        r'(\d+(?:\.\d+)?)\s*t(?:\b|[^\w])'
    ]
    for pat in patterns:
        match = re.search(pat, normalized)
        if match:
            try:
                return float(match.group(1))
            except ValueError:
                pass
    return None


def extract_rate_inr(text: str) -> Optional[float]:
    """Extracts rate in INR (handles '45k', '50,000', '48000 रुपये', '೩೮ ಸಾವಿರ')."""
    normalized = normalize_script_digits(text.lower())

    # Handle Kannada "ಸಾವಿರ" (thousand)
    kan_k_match = re.search(r'(\d+(?:\.\d+)?)\s*ಸಾವಿರ', normalized)
    if kan_k_match:
        return float(kan_k_match.group(1)) * 1000.0

    # Handle "45k", "46.5k", "52k"
    k_match = re.search(r'(\d+(?:\.\d+)?)\s*k\b', normalized)
    if k_match:
        return float(k_match.group(1)) * 1000.0

    # Handle full numeric amounts like "48000", "55,000", "38000"
    num_match = re.search(r'(?:₹|rs\.?|inr|rate|budget)?\s*(\d{1,3}(?:,\d{3})+|\d{4,6})\s*(?:₹|rs\.?|inr|रुपये|ರೂಪಾಯಿ)?', normalized)
    if num_match:
        raw_val = num_match.group(1).replace(',', '')
        try:
            val = float(raw_val)
            # Sanity check: road freight rates are typically >= 1000 INR
            if val >= 1000.0:
                return val
        except ValueError:
            pass

    return None


def clean_location_name(loc: Optional[str]) -> Optional[str]:
    """Strips conversational noise words from extracted city names."""
    if not loc:
        return None
    noise_prefixes = [
        r'^sir,?\s*', r'^bhai(?:ya)?,?\s*', r'^kal\s+subah\s*', r'^kal\s+sham\s*',
        r'^nale\s+belagge\s*', r'^nale\s+sanje\s*', r'^ನಾಳೆ\s+ಬೆಳಗ್ಗೆ\s*', r'^ನಾಳೆ\s+ಸಂಜೆ\s*',
        r'^कल\s+सुबह\s*', r'^कल\s+शाम\s*', r'^urgent\s*'
    ]
    cleaned = loc.strip()
    for np in noise_prefixes:
        cleaned = re.sub(np, '', cleaned, flags=re.IGNORECASE).strip()
    return cleaned if cleaned else None


def extract_origin_destination(text: str) -> Tuple[Optional[str], Optional[str]]:
    """
    Extracts origin and destination from Indian route patterns:
    - English: 'from X to Y'
    - Hindi / Hinglish: 'X se Y'
    - Kannada / Kanglish: 'X inda Y ge' or 'X ಇಂದ Y ಗೆ' or 'X ದಿಂದ Y ಗೆ'
    """
    normalized = normalize_script_digits(text)

    # 1. Kannada script: "X ಇಂದ Y ಗೆ" or "X ದಿಂದ Y ಗೆ"
    kan_match = re.search(r'([\u0C80-\u0CFF\w\s,]+?)\s*(?:ಇಂದ|ದಿಂದ|ರಿನಿಂದ)\s+([\u0C80-\u0CFF\w\s,]+?)\s*ಗೆ', normalized)
    if kan_match:
        return clean_location_name(kan_match.group(1)), clean_location_name(kan_match.group(2))

    # 2. Kanglish: "X inda Y ge"
    kgl_match = re.search(r'(?:sir,?\s*)?([a-zA-Z\s,]+?)\s+inda\s+([a-zA-Z\s,]+?)\s+ge\b', normalized, re.IGNORECASE)
    if kgl_match:
        return clean_location_name(kgl_match.group(1)), clean_location_name(kgl_match.group(2))

    # 3. Hindi script: "X से Y"
    hin_match = re.search(r'([\u0900-\u097F\w\s,]+?)\s*से\s+([\u0900-\u097F\w\s,]+?)(?:\s+(?:के\s+लिए|तक|को|\d+|टन|लोड|गाड़ी)|\.|$)', normalized)
    if hin_match:
        return clean_location_name(hin_match.group(1)), clean_location_name(hin_match.group(2))

    # 4. Hinglish: "X se Y (ke liye)"
    hgl_match = re.search(r'(?:bhai(?:ya)?,?\s*)?([a-zA-Z\s,]+?)\s+se\s+([a-zA-Z\s,]+?)\s+(?:ke\s+liye|urgent|bhejna|\d+|ton|\b)', normalized, re.IGNORECASE)
    if hgl_match:
        return clean_location_name(hgl_match.group(1)), clean_location_name(hgl_match.group(2))

    # 5. English: "from X to Y"
    eng_match = re.search(r'from\s+([a-zA-Z\s,]+?)\s+to\s+([a-zA-Z\s,]+?)(?:\s+(?:tomorrow|on|for|today|urgent|\d)|\.|$)', normalized, re.IGNORECASE)
    if eng_match:
        return clean_location_name(eng_match.group(1)), clean_location_name(eng_match.group(2))

    return None, None
