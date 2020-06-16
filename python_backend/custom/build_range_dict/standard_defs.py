from helpers.step_funcs import step_1sqr45d, step_1sqr135d, step_1sqr315d, step_func_list

__doc__ = \
    """
    The standard game pieces. Their definitions cannot be altered. Rook, King, and Pawn, are not defined because their abilities
    steps outside the standard defs format (Kings need to avoid check, Kings and Rooks participate in castling, Pawns can be 
    promoted and capture differently than then move and perform en-passant). These pieces can be substituted by pieces of
    different name that use same id.
    """

_standard_defs = {
    "Queen": {
        "spans": ["0d", "45d", "90d", "135d", "180d", "225d", "270d", "315d"],
        "step_funcs": step_func_list,
        "offsets": []
    },
    "Bishop": {

        "spans": ["45d", "135d", "225d", "315d"],
        "span_funcs": [step_1sqr45d, step_1sqr135d, step_1sqr315d],
        "offsets": []
    },
    "Knight": {
        "spans": [],
        "offsets": [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]
    }
}
