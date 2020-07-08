from game_logic.fenParser.fen_ids import fen_ids
from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.sqr_case.is_empty_sqr import is_empty_sqr
from game_logic.piece_type.is_piece import is_piece


def get_fen_id(key, color):
    """take a piece type or a piece id, and return a corresponding fen id"""
    if is_empty_sqr(key):
        return key
    if is_piece(key):
        piece_type = get_piece_type(key)
    else:
        piece_type = key
    return fen_ids[color][piece_type]
