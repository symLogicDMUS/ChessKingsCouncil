from custom_except import *
from getters.get_sqr_case import get_sqr_case
from misc.sqr_cases import *


def get_actual_pawn_captures(board, potential_pawn_captures, color):
    """filter the list of potential pawn captures to get actual ones"""
    return list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) == ENEMY,
                       potential_pawn_captures))


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

    # test 1, b4 pawn:
    print('test 1, b4 pawn:')
    actual_pawn_captures = get_actual_pawn_captures(board, [(3, 5), (1, 5)], 'W')
    print(actual_pawn_captures)
    print('\n')
