from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from game_logic.sqr_case.get_sqr_case import get_sqr_case
from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.printers.print_board import print_board
from game_logic.sqr_case.sqr_cases import *


def get_actual_pawn_threats(board, potential_pawn_threats, color):
    """filter the list of potential pawn threats to get list of actual pawn threats"""
    return list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) == ENEMY \
                                   and get_piece_type(board[sqr]) == 'P', potential_pawn_threats))


if __name__ == "__main__":
    board = sample_board_dicts['pawn_threat1']
    print('test 1')
    print_board(board, highlights=get_actual_pawn_threats(board, [(5, 4), (7, 4)], 'W'), highlights3=[(6, 3)])
    print('')
    print('test 2')
    print_board(board, highlights=get_actual_pawn_threats(board, [(2, 4), (4, 4)], 'B'), highlights3=[(3, 5)])
    print('')
