from game_logic.sqr_case.get_sqr_case import get_sqr_case
from game_logic.threatArea.top.sqr_under_attack import sqr_under_attack
from game_logic.helpers.formulas import dist
from game_logic.sqr_case.sqr_cases import *
from game_logic.printers.print_board import print_board
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from game_logic.test_objects.get_standard_range_defs import get_standard_range_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from math import sqrt


def get_king_moves(board, sqr, color, range_defs, id_dict):
    """get every 1 king distance away that is not out of bounds or a friendly piece"""
    king_moves = list(filter(lambda sqr2: dist(sqr, sqr2) == sqrt(2) or dist(sqr, sqr2) == 1, board.keys()))
    king_moves = list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) != OOB, king_moves))
    king_moves = list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) != FRIEND, king_moves))
    king_moves = list(filter(lambda sqr: not sqr_under_attack(board, sqr, color, range_defs, id_dict), king_moves))
    return king_moves


if __name__ == "__main__":

    range_defs = get_standard_range_defs()
    id_dict = get_standard_id_dict()

    board = sample_board_dicts["king_range_test"]

    king_moves = get_king_moves(board, (4, 3), 'W', range_defs, id_dict)
    print_board(board, heading="test 1, white", highlights=king_moves)

    king_moves = get_king_moves(board, (5, 8), 'B', range_defs, id_dict)
    print_board(board, heading='test 2, black', highlights=king_moves)