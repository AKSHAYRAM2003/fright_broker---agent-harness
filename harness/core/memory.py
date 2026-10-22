"""
In-memory / Local Persistent Repository for Broker Directory & Lane Memory.
Manages private transporters, lane histories, active loads, and incoming quotes.
"""

from typing import Dict, List, Optional
from .schemas import Load, Transporter, Quote, Trip, LoadStatus, VehicleCategory


class BrokerMemoryStore:
    """
    Manages tenant-isolated data for a freight brokerage.
    Ensures complete privacy of customer loads and transporter contacts.
    """

    def __init__(self, tenant_id: str):
        self.tenant_id = tenant_id
        self.loads: Dict[str, Load] = {}
        self.transporters: Dict[str, Transporter] = {}
        self.quotes: Dict[str, List[Quote]] = {}  # load_id -> list of quotes
        self.trips: Dict[str, Trip] = {}
        self._seed_default_transporters()

    def _seed_default_transporters(self):
        """Seeds realistic Indian road freight transporters for key southern/western corridors."""
        seed_data = [
            Transporter(
                id="TR_01",
                tenant_id=self.tenant_id,
                business_name="Sharma Road Carriers",
                contact_name="Ramesh Sharma",
                phone_number="+919845012345",
                preferred_lanes=["BLR-BHW", "BLR-PUN", "BLR-MUM", "Bengaluru-Mumbai"],
                reliability_score=4.8,
                is_verified=True,
            ),
            Transporter(
                id="TR_02",
                tenant_id=self.tenant_id,
                business_name="Sri Balaji Roadlines",
                contact_name="Venkatesh Babu",
                phone_number="+919886023456",
                preferred_lanes=["BLR-HYD", "BLR-MAA", "BLR-HUB", "Bengaluru-Hubballi"],
                reliability_score=4.6,
                is_verified=True,
            ),
            Transporter(
                id="TR_03",
                tenant_id=self.tenant_id,
                business_name="Karnataka-Maharashtra Freightways",
                contact_name="Sunil Patil",
                phone_number="+919448034567",
                preferred_lanes=["BLR-BHW", "BLR-PUN", "HUB-BHW", "Peenya-Pune"],
                reliability_score=4.5,
                is_verified=True,
            ),
            Transporter(
                id="TR_04",
                tenant_id=self.tenant_id,
                business_name="South-North Express Transport",
                contact_name="Harish Yadav",
                phone_number="+919916045678",
                preferred_lanes=["BLR-DEL", "BLR-JAI", "BLR-BHW"],
                reliability_score=4.2,
                is_verified=True,
            ),
        ]
        for t in seed_data:
            self.transporters[t.id] = t

    def add_transporter(self, transporter: Transporter):
        self.transporters[transporter.id] = transporter

    def get_transporters_for_route(self, origin: str, destination: str) -> List[Transporter]:
        """
        Finds matching candidate transporters based on lane affinity.
        Matches city tokens (e.g. BLR, Bengaluru, Peenya -> Bhiwandi, Mumbai, BHW).
        """
        matches = []
        origin_lower = origin.lower()
        dest_lower = destination.lower()

        for t in self.transporters.values():
            for lane in t.preferred_lanes:
                lane_parts = lane.lower().split("-")
                if len(lane_parts) == 2:
                    lane_orig, lane_dest = lane_parts[0], lane_parts[1]
                    # Check if origin matches (e.g. BLR/Bengaluru/Peenya)
                    orig_match = (
                        lane_orig in origin_lower
                        or ("blr" in lane_orig and ("bengaluru" in origin_lower or "peenya" in origin_lower or "whitefield" in origin_lower))
                    )
                    # Check if destination matches (e.g. BHW/Bhiwandi/Pune/Mumbai)
                    dest_match = (
                        lane_dest in dest_lower
                        or ("bhw" in lane_dest and ("bhiwandi" in dest_lower or "mumbai" in dest_lower))
                        or ("pun" in lane_dest and "pune" in dest_lower)
                        or ("hyd" in lane_dest and "hyderabad" in dest_lower)
                        or ("hub" in lane_dest and ("hubli" in dest_lower or "hubballi" in dest_lower))
                        or ("del" in lane_dest and "delhi" in dest_lower)
                    )
                    if orig_match and dest_match:
                        matches.append(t)
                        break

        # If no specific lane match, fallback to top-rated verified transporters
        if not matches:
            matches = sorted(self.transporters.values(), key=lambda x: x.reliability_score, reverse=True)[:2]

        return sorted(matches, key=lambda x: x.reliability_score, reverse=True)

    def save_load(self, load: Load):
        self.loads[load.id] = load

    def get_load(self, load_id: str) -> Optional[Load]:
        return self.loads.get(load_id)

    def save_quote(self, quote: Quote):
        if quote.load_id not in self.quotes:
            self.quotes[quote.load_id] = []
        self.quotes[quote.load_id].append(quote)

    def get_quotes_for_load(self, load_id: str) -> List[Quote]:
        return self.quotes.get(load_id, [])

    def save_trip(self, trip: Trip):
        self.trips[trip.id] = trip

    def get_trip(self, trip_id: str) -> Optional[Trip]:
        return self.trips.get(trip_id)
