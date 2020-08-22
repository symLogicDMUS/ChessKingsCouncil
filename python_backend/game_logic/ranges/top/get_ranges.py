from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.ranges.pawn.top.pawn import pawn
from game_logic.ranges.king.top.king import king
from game_logic.ranges.specialMoves.SpecialMoves import SpecialMoves
from game_logic.ranges.get_range import get_range
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.color.get_color import get_color
from pprint import pprint


def get_ranges(board, color, ranges, json_records, piece_defs, id_dict):
    """get the range of every piece on board of specific color, including special moves
    these ranges are initial ranges. They don't take into consideration if the move endangers the king or not. This is
    resolved later in the program and the initial ranges are then filtered

    the ranges of special pieces Rook and Pawn (who's ranges cannot be fully defined by the defs format)
    are resolved first, then for the Knight, Queen, Bishop, Rook, and any assign_ids defined pieces.

    defs[id_dict] dict is a dict withs keys the non-special assigned ids, and values the names they're representing
    defs_[piece_defs] is a subset of defs.json
    """
    special_moves = SpecialMoves()
    for sqr, id_ in board.items():
        if id_ == '#':
            continue
        if get_color(id_) != color:
            continue
        piece_type = get_piece_type(id_)
        if piece_type == 'P':
            piece_range, special_moves = pawn(board, sqr, color, json_records, special_moves)
            ranges[id_].extend(piece_range)
        elif piece_type == 'K':
            piece_range, special_moves = king(board, sqr, color, json_records, special_moves, piece_defs, id_dict)
            ranges[id_].extend(piece_range)
        else:
            piece_range = get_range(board, sqr, color, piece_defs, id_dict)
            ranges[id_].extend(piece_range)

    return ranges, special_moves


if __name__ == "__main__":
    pass  # TODO: implement test
