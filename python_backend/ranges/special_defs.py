from ranges.pawn.pawn import pawn
from ranges.king.king import king

__doc__ = \
    """
    range functions for the pieces who ability cannot be fully defined by the defs format. Kings need to avoid check, Kings
    initiate castling, Pawns can be promoted, capture differently than they move, and perform en-passant.
    """

_special_defs = {"King": king, "Pawn": pawn}
