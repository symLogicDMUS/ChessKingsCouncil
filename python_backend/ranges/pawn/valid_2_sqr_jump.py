from step_funcs.step_funcs import step_1sqr90d, step_1sqr270d
from sqr_case.get_sqr_case import get_sqr_case
from sqr_case.sqr_cases import *
from JsonRecords.JsonRecords import JsonRecords
from piece_type.get_piece_type import get_piece_type
from color.get_color import get_color
from pprint import pprint
import traceback


def valid_2_sqr_jump(sqr, board, color, pawn_hist):
    """get the square that might be a first move 2 square jump for pawn"""
    try:
        id_ = board[sqr]
        if len(pawn_hist[id_]) != 1:
            return False
        if color == 'W':
            x, y = step_1sqr90d(sqr[0], sqr[1])
            if get_sqr_case(board, x, y, color) != EMPTY:
                return False
            x, y = step_1sqr90d(x, y)
            if get_sqr_case(board, x, y, color) != EMPTY:
                return False
        elif color == 'B':
            x, y = step_1sqr270d(sqr[0], sqr[1])
            if get_sqr_case(board, x, y, color) != EMPTY:
                return False
            x, y = step_1sqr270d(x, y)
            if get_sqr_case(board, x, y, color) != EMPTY:
                return False
        else:
            print('error: invalid color')
            return -1
        return True
    except KeyError:
        f = open("_runtime_error._txt", "w")
        traceback.print_exc(file=f)
        pprint(pawn_hist)


if __name__ == "__main__":
    board = \
        {(1, 8): 'BR1', (2, 8): '#', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): 'BN2',
         (8, 8): 'BR2',
         (1, 7): 'BP5', (2, 7): '#', (3, 7): 'BP6', (4, 7): '#', (5, 7): '#', (6, 7): 'BP7', (7, 7): 'BP8', (8, 7): '#',
         (1, 6): '#', (2, 6): 'BP4', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BN1', (2, 5): '#', (3, 5): '#', (4, 5): 'BP1', (5, 5): 'BP2', (6, 5): '#', (7, 5): 'WP8',
         (8, 5): 'BP3',
         (1, 4): '#', (2, 4): 'WP5', (3, 4): 'WP6', (4, 4): '#', (5, 4): 'WP7', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): 'WN2', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): 'WP1', (2, 2): '#', (3, 2): '#', (4, 2): 'WP2', (5, 2): '#', (6, 2): 'WP3', (7, 2): '#', (8, 2): 'WP4',
         (1, 1): 'WR1', (2, 1): '#', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB2', (7, 1): 'WN1',
         (8, 1): 'WR2'}

    json_records = JsonRecords(
        "C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/saved_games/pawn_range/pawn_range.json",
        board)

    for sqr, id in board.items():
        if id == '#':
            continue
        if get_piece_type(id) == 'Pawn':
            if get_color(id) == 'W':
                color = 'W'
            else:
                color = 'B'
            print("id:{} has first move 2 sqrs:{}".format(id, valid_2_sqr_jump(sqr, board, color,
                                                                               json_records.pawn_histories)))
