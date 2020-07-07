from copy import deepcopy
from game_logic.movePiece.ply import ply


def get_temp_board(board, start, dest):
    """get a temporary board where a move from start to dest has taken place. used to evaluate the would-be for that
        scenenario
    """
    temp_board = deepcopy(board)
    temp_board, captured = ply(temp_board, start, dest)
    return temp_board
