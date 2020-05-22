
from bools.sqr_under_attack import sqr_under_attack
from copy import deepcopy
from movePiece.ply import ply


def get_temp_board(board, start, dest):
    """get a temporary board where a move from start to dest has taken place. used to evaluate the would-be for that
        scenenario
    """
    temp_board = deepcopy(board)
    temp_board, captured = ply(temp_board, start, dest)
    return temp_board
