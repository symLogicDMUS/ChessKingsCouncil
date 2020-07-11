from math import sqrt
from game_logic.helpers.formulas import dist
from game_logic.sqr_case.get_sqr_case import get_sqr_case
from game_logic.sqr_case.sqr_cases import *
from game_logic.printers.print_board import print_board


def get_king_threats(board, sqr, color):
    """for a square not containg the king, get list of kings threatening that square"""
    return list(filter(lambda sqr2:
                       (dist(sqr, sqr2) == 1 or dist(sqr, sqr2) == sqrt(2))
                       and get_sqr_case(board, sqr2[0], sqr2[1], color) == ENEMY
                       and board[sqr2][1] == 'K',
                       board.keys()))


if __name__ == "__main__":
    board = \
        {(1, 1): '#', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): '#', (7, 1): '#', (8, 1): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): 'BP1', (7, 2): 'WK1', (8, 2): 'WK2',
         (1, 3): '#', (2, 3): '#', (3, 3): 'BK1', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): 'WK3',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): 'WK4', (7, 4): 'BK2', (8, 4): 'WK5',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): 'BK3', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#'}

    # test 1:
    print('test 1:')
    print_board(board, highlights=get_king_threats(board, (4, 4), 'W'))
    print('\n')

    # test 2:
    print('test 2:')
    print_board(board, highlights=get_king_threats(board, (7, 3), 'B'))
    print('\n')
