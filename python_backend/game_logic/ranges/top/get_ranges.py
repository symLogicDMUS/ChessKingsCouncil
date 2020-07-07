from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.ranges.get_range_func import get_range_func
from game_logic.ranges.specialMoves.SpecialMoves import SpecialMoves
from game_logic.ranges.get_range import get_range
from game_logic.JsonRecords import JsonRecords
from game_logic.color.get_color import get_color
from pprint import pprint


def get_ranges(board, color, ranges, json_records, defs_):
    """get the range of every piece on board of specific color, including special moves
    these ranges are initial ranges. They don't take into consideration if the move endangers the king or not. This is
    resolved later in the program and the initial ranges are then filtered

    the ranges of special pieces Rook and Pawn (who's ranges cannot be fully defined by the defs format)
    are resolved first, then for the Knight, Queen, Bishop, Rook, and any assign_ids defined pieces.

    defs[id_dict] dict is a dict withs keys the non-special assigned ids, and values the names they're representing
    defs_[range_defs] is a subset of defs.json
    """
    id_dict = defs_['id_dict']
    range_defs = defs_['range_defs']
    special_moves = SpecialMoves()
    for sqr, id_ in board.items():
        if id_ == '#':
            continue
        if get_color(id_) != color:
            continue
        piece_type = get_piece_type(id_)
        if piece_type == 'Pawn':
            range_func = get_range_func(piece_type)
            piece_range, special_moves = range_func(sqr, board, color, json_records, special_moves)
            ranges[id_].extend(piece_range)
        elif piece_type == 'King':
            range_func = get_range_func(piece_type)
            piece_range, special_moves = range_func(sqr, board, color, json_records, special_moves)
            ranges[id_].extend(piece_range)
        else:
            piece_range = get_range(id_dict, range_defs, board, sqr, color)
            ranges[id_].extend(piece_range)

    return ranges, special_moves


if __name__ == "__main__":
    board = \
        {(1, 1): '#', (2, 1): '#', (3, 1): '#', (4, 1): 'BR1', (5, 1): '#', (6, 1): 'WB1', (7, 1): '#', (8, 1): 'WR1',
         (1, 2): '#', (2, 2): 'BN1', (3, 2): 'BB1', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): 'BQ1',
         (1, 4): '#', (2, 4): '#', (3, 4): 'BK1', (4, 4): '#', (5, 4): 'WP1', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): 'BP1', (5, 5): 'WK1', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): 'WN1', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): '#', (2, 8): 'BN2', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    ranges = \
        {'WB1': [],
         'WR1': [],
         'WP1': [],
         'WK1': [],
         'WN1': [],
         'BR1': [],
         'BN1': [],
         'BB1': [],
         'BQ1': [],
         'BK1': [],
         'BP1': [],
         'BN2': [],
         'BR2': []}

    json_records = JsonRecords("../../example_games/check_example1/check_example1.json", board, j_records=None)

    id_dict = {
        "k": "King",
        "q": "Queen",
        "r": "Rook",
        "b": "Bishop",
        "n": "Knight",
        "p": "Pawn"
    }

    range_defs = {
        "Rook": {
            "W": {
                "spans": [
                    "step_1sqr0d",
                    "step_1sqr90d",
                    "step_1sqr180d",
                    "step_1sqr270d"
                ],
                "offsets": []
            },
            "B": {
                "spans": [
                    "step_1sqr180d",
                    "step_1sqr270d",
                    "step_1sqr0d",
                    "step_1sqr90d"
                ],
                "offsets": []
            }
        },
        "Bishop": {
            "W": {
                "spans": [
                    "step_1sqr45d",
                    "step_1sqr135d",
                    "step_1sqr225d",
                    "step_1sqr315d"
                ],
                "offsets": []
            },
            "B": {
                "spans": [
                    "step_1sqr225d",
                    "step_1sqr315d",
                    "step_1sqr45d",
                    "step_1sqr135d"
                ],
                "offsets": []
            }
        },
        "Queen": {
            "W": {
                "spans": [
                    "step_1sqr0d",
                    "step_1sqr45d",
                    "step_1sqr90d",
                    "step_1sqr135d",
                    "step_1sqr180d",
                    "step_1sqr225d",
                    "step_1sqr270d",
                    "step_1sqr315d"
                ],
                "offsets": []
            },
            "B": {
                "spans": ["step_1sqr180d",
                          "step_1sqr225d",
                          "step_1sqr270d",
                          "step_1sqr315d",
                          "step_1sqr0d",
                          "step_1sqr90d",
                          "step_1sqr45d",
                          "step_1sqr135d"
                          ],
                "offsets": []
            }
        },
        "Knight": {
            "W": {
                "spans": [],
                "offsets": [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]
            },
            "B": {
                "spans": [],
                "offsets": [[-1, -2], [-1, 2], [1, -2], [1, 2], [-2, -1], [-2, 1], [2, -1], [2, 1]]
            }
        }
    }

    pprint(get_ranges(board, 'W', ranges, json_records, {"id_dict": id_dict, "range_defs": range_defs}))
