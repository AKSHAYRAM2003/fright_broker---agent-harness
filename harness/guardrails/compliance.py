"""
Deterministic Vehicle & Compliance Guardrail Engine.
Validates vehicle registration, VAHAN fitness, national permits, and tonnage compatibility.
"""

from typing import Dict, List
from ..core.schemas import VehicleCategory, VehicleCompliance


# Approximate maximum payload capacity in metric tonnes for standard Indian trucks
VEHICLE_CAPACITY_LIMITS_TONNES = {
    VehicleCategory.LCV_SMALL: 2.5,
    VehicleCategory.ICV: 7.0,
    VehicleCategory.MCV_6W: 10.0,
    VehicleCategory.HCV_10W_TAURUS: 18.0,
    VehicleCategory.HCV_MULTI_AXLE: 28.0,
    VehicleCategory.CONTAINER_32_SXL: 7.5,
    VehicleCategory.CONTAINER_32_MXL: 18.0,
    VehicleCategory.CONTAINER_32_HQ: 12.0,  # Volumetric limit
    VehicleCategory.CONTAINER_40_HQ: 20.0,
}


class ComplianceGuardrail:
    """
    Guards against booking under-tonnage trucks or vehicles with lapsed compliance.
    """

    @classmethod
    def validate_vehicle_compatibility(
        cls,
        required_vehicle: VehicleCategory,
        actual_weight_tonnes: float,
        vehicle_compliance: VehicleCompliance,
    ) -> Dict:
        """
        Validates vehicle compliance and payload compatibility.
        """
        reasons: List[str] = []

        # 1. Capacity Check
        max_allowed_payload = VEHICLE_CAPACITY_LIMITS_TONNES.get(required_vehicle, 25.0)
        if actual_weight_tonnes > max_allowed_payload:
            reasons.append(
                f"Payload overload! Load weight ({actual_weight_tonnes}T) exceeds maximum "
                f"safe capacity for {required_vehicle.value} ({max_allowed_payload}T)."
            )

        # 2. VAHAN Status
        if vehicle_compliance.rc_status != "ACTIVE":
            reasons.append(f"Vehicle RC status is '{vehicle_compliance.rc_status}', must be 'ACTIVE'.")

        # 3. Fitness Certificate
        if not vehicle_compliance.fitness_valid:
            reasons.append("Vehicle fitness certificate has expired.")

        # 4. National Permit
        if not vehicle_compliance.national_permit_valid:
            reasons.append("National Permit (All India Permit) is expired or invalid for interstate transit.")

        # 5. Insurance
        if not vehicle_compliance.insurance_valid:
            reasons.append("Commercial vehicle third-party/comprehensive insurance is expired.")

        is_approved = len(reasons) == 0

        return {
            "vehicle_number": vehicle_compliance.vehicle_number,
            "is_approved": is_approved,
            "violations": reasons,
        }
