from ranges.pawn.pawn import pawn
from ranges.king.king import king
from ranges.path_pieces.rook import rook

__doc__ = \
    """
    range functions for the pieces who ability cannot be fully defined by the defs format. Kings need to avoid check, Kings
    and Rooks participate in castling, Pawns can be promoted, capture differently than they move, and perform en-passant
    """

_special_defs = {"King": king, "Rook": rook, "Pawn": pawn}
