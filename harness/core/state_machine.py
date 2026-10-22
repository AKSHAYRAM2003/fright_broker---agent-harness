"""
Finite State Machine (FSM) for Indian Freight Load Lifecycle.
Enforces deterministic lifecycle transitions and invariants.
"""

from typing import Dict, Set
from .schemas import LoadStatus


class InvalidStateTransitionError(Exception):
    """Raised when an illegal state transition is attempted."""
    pass


class LoadStateMachine:
    """
    Manages deterministic transitions across the load lifecycle.
    Prevents probabilistic AI models from skipping critical verification steps.
    """

    ALLOWED_TRANSITIONS: Dict[LoadStatus, Set[LoadStatus]] = {
        LoadStatus.INQUIRY_RECEIVED: {
            LoadStatus.INQUIRY_INCOMPLETE,
            LoadStatus.RFQ_DISPATCHED,
            LoadStatus.CANCELLED,
        },
        LoadStatus.INQUIRY_INCOMPLETE: {
            LoadStatus.INQUIRY_RECEIVED,
            LoadStatus.CANCELLED,
        },
        LoadStatus.RFQ_DISPATCHED: {
            LoadStatus.QUOTES_RECEIVED,
            LoadStatus.CANCELLED,
        },
        LoadStatus.QUOTES_RECEIVED: {
            LoadStatus.PENDING_BROKER_APPROVAL,
            LoadStatus.RFQ_DISPATCHED,  # Sourcing more quotes
            LoadStatus.CANCELLED,
        },
        LoadStatus.PENDING_BROKER_APPROVAL: {
            LoadStatus.BOOKED,          # Broker approved
            LoadStatus.RFQ_DISPATCHED,  # Broker requested counter-offer
            LoadStatus.CANCELLED,
        },
        LoadStatus.BOOKED: {
            LoadStatus.DRIVER_ASSIGNED,
            LoadStatus.CANCELLED,
        },
        LoadStatus.DRIVER_ASSIGNED: {
            LoadStatus.LOADING_COMPLETED,
            LoadStatus.CANCELLED,
        },
        LoadStatus.LOADING_COMPLETED: {
            LoadStatus.IN_TRANSIT,
            LoadStatus.CANCELLED,
        },
        LoadStatus.IN_TRANSIT: {
            LoadStatus.DELIVERED,
        },
        LoadStatus.DELIVERED: {
            LoadStatus.POD_VERIFIED,
        },
        LoadStatus.POD_VERIFIED: {
            LoadStatus.CLOSED,
        },
        LoadStatus.CLOSED: set(),
        LoadStatus.CANCELLED: set(),
    }

    @classmethod
    def can_transition(cls, current_state: LoadStatus, next_state: LoadStatus) -> bool:
        """Checks if a transition from current_state to next_state is valid."""
        return next_state in cls.ALLOWED_TRANSITIONS.get(current_state, set())

    @classmethod
    def transition(cls, current_state: LoadStatus, next_state: LoadStatus) -> LoadStatus:
        """
        Executes a state transition or raises an InvalidStateTransitionError.
        """
        if not cls.can_transition(current_state, next_state):
            raise InvalidStateTransitionError(
                f"Illegal state transition attempted: '{current_state.value}' -> '{next_state.value}'. "
                f"Allowed transitions from '{current_state.value}': "
                f"{[s.value for s in cls.ALLOWED_TRANSITIONS.get(current_state, set())]}"
            )
        return next_state
