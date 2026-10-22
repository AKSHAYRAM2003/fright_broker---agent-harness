"""
Core Domain Data Schemas for Indian Freight Broker AI Operations Harness.
Built with Pydantic V2.
"""

from datetime import datetime
from enum import Enum
from typing import Dict, List, Optional
from pydantic import BaseModel, Field


class VehicleCategory(str, Enum):
    """Indian Road Freight Vehicle Taxonomy."""
    LCV_SMALL = "LCV_SMALL"              # Tata Ace / Bolero Pickup (1.0 - 2.5T)
    ICV = "ICV"                          # 14ft - 19ft (4.0 - 7.0T)
    MCV_6W = "MCV_6W"                    # 6-Wheeler (9.0 - 10.0T)
    HCV_10W_TAURUS = "HCV_10W_TAURUS"    # 10-Wheeler Taurus (16.0 - 18.0T)
    HCV_MULTI_AXLE = "HCV_MULTI_AXLE"    # 12 / 14-Wheeler (21.0 - 28.0T)
    CONTAINER_32_SXL = "CONTAINER_32_SXL"# 32ft Single Axle (7.5T)
    CONTAINER_32_MXL = "CONTAINER_32_MXL"# 32ft Multi Axle (14.0 - 18.0T)
    CONTAINER_32_HQ = "CONTAINER_32_HQ"  # 32ft High Cube (Volumetric FMCG/E-com)
    CONTAINER_40_HQ = "CONTAINER_40_HQ"  # 40ft High Cube


class LoadStatus(str, Enum):
    """Finite State Machine states for a Load lifecycle."""
    INQUIRY_RECEIVED = "INQUIRY_RECEIVED"
    INQUIRY_INCOMPLETE = "INQUIRY_INCOMPLETE"
    RFQ_DISPATCHED = "RFQ_DISPATCHED"
    QUOTES_RECEIVED = "QUOTES_RECEIVED"
    PENDING_BROKER_APPROVAL = "PENDING_BROKER_APPROVAL"
    BOOKED = "BOOKED"
    DRIVER_ASSIGNED = "DRIVER_ASSIGNED"
    LOADING_COMPLETED = "LOADING_COMPLETED"
    IN_TRANSIT = "IN_TRANSIT"
    DELIVERED = "DELIVERED"
    POD_VERIFIED = "POD_VERIFIED"
    CLOSED = "CLOSED"
    CANCELLED = "CANCELLED"


class LoadInquiry(BaseModel):
    """Raw parsed load inquiry before validation."""
    origin: str
    destination: str
    weight_tonnes: Optional[float] = None
    vehicle_type: Optional[VehicleCategory] = None
    material_type: Optional[str] = None
    target_pickup_date: Optional[str] = None
    raw_text: str
    missing_fields: List[str] = Field(default_factory=list)


class Load(BaseModel):
    """Active Load entity."""
    id: str
    tenant_id: str
    shipper_name: str
    shipper_phone: str
    origin_city: str
    origin_hub: Optional[str] = None
    destination_city: str
    destination_hub: Optional[str] = None
    material_type: str
    weight_tonnes: float
    vehicle_required: VehicleCategory
    target_pickup_date: datetime
    shipper_target_rate: Optional[float] = None
    status: LoadStatus = LoadStatus.INQUIRY_RECEIVED
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: datetime = Field(default_factory=datetime.now)


class Transporter(BaseModel):
    """Transporter contact from the broker's private directory."""
    id: str
    tenant_id: str
    business_name: str
    contact_name: str
    phone_number: str
    preferred_lanes: List[str] = Field(default_factory=list)  # e.g. ["BLR-BHW", "BLR-HYD"]
    reliability_score: float = Field(default=5.0, ge=1.0, le=5.0)
    is_verified: bool = True


class Quote(BaseModel):
    """Parsed quote received from a transporter."""
    id: str
    load_id: str
    transporter_id: str
    quoted_amount: float
    includes_tolls: bool = True
    loading_unloading_charges: float = 0.0
    validity_hours: int = 12
    raw_message: str
    confidence_score: float = 1.0
    is_selected: bool = False
    created_at: datetime = Field(default_factory=datetime.now)


class VehicleCompliance(BaseModel):
    """Vehicle and driver compliance record checked against RTO/VAHAN."""
    vehicle_number: str
    is_vahan_verified: bool = False
    rc_status: str = "ACTIVE"
    fitness_valid: bool = True
    national_permit_valid: bool = True
    insurance_valid: bool = True
    registered_gvw_kg: int = 0  # Gross Vehicle Weight


class Trip(BaseModel):
    """Booked and active trip execution record."""
    id: str
    load_id: str
    transporter_id: str
    agreed_transporter_rate: float
    customer_rate: float
    gross_margin: float
    margin_percentage: float
    advance_payable: float
    balance_payable: float
    driver_name: str
    driver_phone: str
    vehicle_number: str
    compliance: VehicleCompliance
    status: LoadStatus = LoadStatus.BOOKED


class ActionPriority(str, Enum):
    URGENT = "URGENT"       # Margin issue, delay exception
    NORMAL = "NORMAL"       # Routine booking confirmation
    INFO = "INFO"           # Milestone notification


class ActionItem(BaseModel):
    """Human-in-the-Loop (HITL) Queue Item presented to the broker."""
    id: str
    tenant_id: str
    load_id: str
    priority: ActionPriority
    title: str
    description: str
    proposed_action: str
    data_payload: Dict = Field(default_factory=dict)
    options: List[str] = Field(default_factory=list)
    status: str = "PENDING"  # PENDING, APPROVED, REJECTED
    created_at: datetime = Field(default_factory=datetime.now)
