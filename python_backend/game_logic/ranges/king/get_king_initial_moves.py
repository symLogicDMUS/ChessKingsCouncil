from game_logic.sqr_case.get_sqr_case import get_sqr_case
from game_logic.sqr_case.sqr_cases import *
from game_logic.helpers.formulas import dist
from game_logic.printers.print_board import print_board
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from math import sqrt


def get_king_initial_moves(board, sqr, color):
    """get every initial 'king' move (one square away from sqr)"""
    init_moves = list(filter(lambda sqr2: dist(sqr, sqr2) == sqrt(2) or dist(sqr, sqr2) == 1, board.keys()))
    init_moves = list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) != OOB, init_moves))
    init_moves = list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) != FRIEND, init_moves))
    return init_moves


if __name__ == "__main__":

    board = sample_board_dicts['super_checkmate_impossible_example']
    init_moves = get_king_initial_moves(board, (6, 6), 'W')
    print_board(board, heading='super_checkmate_impossible_example', highlights=init_moves)
    print(init_moves)
    print('\n')

    board = sample_board_dicts['king_range_test']
    init_moves = get_king_initial_moves(board, (4, 3), 'W')
    print_board(board, heading='king_range_test, white', highlights=init_moves)
    print(init_moves)
    print('\n')
