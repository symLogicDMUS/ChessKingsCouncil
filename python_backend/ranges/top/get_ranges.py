from piece_type.get_piece_type import get_piece_type
from ranges.get_range_func import get_range_func
from ranges.specialMoves.SpecialMoves import SpecialMoves
from ranges.get_range import get_range
from JsonRecords.JsonRecords import JsonRecords
from color.get_color import get_color
from step_funcs.step_funcs import *
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
    print(defs_)
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
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'BK1', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BR1', (2, 5): 'BN1', (3, 5): 'BB1', (4, 5): 'BQ1', (5, 5): '#', (6, 5): 'BB2', (7, 5): 'BN2',
         (8, 5): 'BR2',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): 'WR3', (2, 3): 'WN1', (3, 3): 'WB2', (4, 3): 'WQ1', (5, 3): '#', (6, 3): 'WB3', (7, 3): 'WN2',
         (8, 3): 'WR4',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): '#', (2, 1): 'WR1', (3, 1): 'WB1', (4, 1): 'WR2', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): '#'}

    ranges = \
        {'BB1': [],
         'BB2': [],
         'BK1': [],
         'BN1': [],
         'BN2': [],
         'BQ1': [],
         'BR1': [],
         'BR2': [],
         'WB1': [],
         'WB2': [],
         'WB3': [],
         'WK1': [],
         'WN1': [],
         'WN2': [],
         'WQ1': [],
         'WR1': [],
         'WR2': [],
         'WR3': [],
         'WR4': []}

    json_records = JsonRecords("../../example_games/ranges_test/ranges_test.json", board, j_records=None)

    id_defs = \
        {'b': 'Duke',
         'f': 'Joker',
         'n': 'Knight',
         'r': 'Rook',
         'q': 'Jester',
         'y': 'Morty'}

    name_defs = \
        {'Duke': {'offsets': [[1, 1], [2, 1], [3, 1]],
                  'spans': ["step_1sqr90d",
                            "step_1sqr45d",
                            "step_1sqr0d",
                            "step_1sqr315d",
                            "step_1sqr270d",
                            "step_1sqr225d",
                            "step_1sqr180d",
                            "step_1sqr135d"]},

         'Jester': {'offsets': [],
                    'spans': ["step_1sqr45d",
                              "step_1sqr315d"]},

         'Joker': {'offsets': [[1, 3], [1, -3]],
                   'spans': ["step_1sqr315d",
                             "step_1sqr270d",
                             "step_1sqr225d"]},

         'Knight': {'offsets': [[1, 2],
                                [-1, 2],
                                [1, -2],
                                [-1, -2],
                                [2, 1],
                                [-2, 1],
                                [2, -1],
                                [-2, -1]],
                    'spans': []},

         "Rook": {"offsets": [],
                  "spans": ["step_1sqr0d",
                            "step_1sqr90d",
                            "step_1sqr180d",
                            "step_1sqr270d"]},

         'Morty': {'offsets': [[2, 1], [2, -2]],
                   'spans': [step_1sqr90d,
                             step_1sqr0d,
                             step_1sqr45d]}
         }

    pprint(get_ranges(board, 'W', ranges, json_records, {"id_defs": id_defs, "name_defs": name_defs}))
