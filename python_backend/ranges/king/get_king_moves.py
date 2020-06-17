from sqr_case.get_sqr_case import get_sqr_case
from threatArea.top.sqr_under_attack import sqr_under_attack
from helpers.formulas import dist
from sqr_case.sqr_cases import *
from printers.print_board import print_board
from math import sqrt


def get_king_moves(board, sqr, color):
    """get every 1 king distance away that is not out of bounds or a friendly piece"""
    king_moves = list(filter(lambda sqr2: dist(sqr, sqr2) == sqrt(2) or dist(sqr, sqr2) == 1, board.keys()))
    king_moves = list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) != OOB, king_moves))
    king_moves = list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) != FRIEND, king_moves))
    king_moves = list(filter(lambda sqr: not sqr_under_attack(sqr, board, color), king_moves))
    return king_moves


if __name__ == "__main__":
    board =\
    {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): '#',
    (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): 'BP2', (8, 7): 'BP3', 
    (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#', 
    (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#', 
    (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'WP1', (5, 4): 'BP1', (6, 4): '#', (7, 4): '#', (8, 4): '#', 
    (1, 3): '#', (2, 3): '#', (3, 3): 'BB1', (4, 3): 'WK1', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#', 
    (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): 'WB1', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
    (1, 1): '#', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): '#', (7, 1): '#', (8, 1): '#'}

    king_moves = get_king_moves(board, (4, 3), 'W')
    print_board(board, heading="test 1, white", highlights=king_moves)

    king_moves = get_king_moves(board, (5, 8), 'B')
    print_board(board, heading='test 2, black', highlights=king_moves)