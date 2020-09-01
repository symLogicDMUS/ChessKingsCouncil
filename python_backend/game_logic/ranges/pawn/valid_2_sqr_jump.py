from game_logic.step_funcs.step_funcs import step_1sqr90d, step_1sqr270d
from game_logic.sqr_case.get_sqr_case import get_sqr_case
from game_logic.sqr_case.sqr_cases import *


def valid_2_sqr_jump(sqr, board, color, pawn_hist):
    """get the square that might be a first move 2 square jump for pawn"""
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
        print('error valid_2_sqr_jump.py: invalid color')
        return -1
    return True


if __name__ == "__main__":
    pass
