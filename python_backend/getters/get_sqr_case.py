from custom_except import *
from misc.sqr_cases import OOB, EMPTY, FRIEND, ENEMY
from bools.oob import out_of_bounds


def get_sqr_case(board, x, y, color):
    """get the case of square at location x, y on the board. see sqr_types.py"""

    if out_of_bounds(x, y):
        return OOB
    elif board[(x, y)] == '#':
        return EMPTY
    elif board[(x, y)][0] == color:
        return FRIEND
    else:
        return ENEMY


if __name__ == "__main__":
    # test 1:
    print("test  1:")
    board = \
        {(1, 1): '#', (1, 2): '#', (1, 3): 'WR3', (1, 4): '#', (1, 5): 'BR1', (1, 6): '#', (1, 7): '#', (1, 8): '#',
         (2, 1): 'WR1', (2, 2): '#', (2, 3): 'WN1', (2, 4): '#', (2, 5): 'BN1', (2, 6): '#', (2, 7): '#', (2, 8): '#',
         (3, 1): 'WB1', (3, 2): '#', (3, 3): 'WB2', (3, 4): '#', (3, 5): 'BB1', (3, 6): '#', (3, 7): '#', (3, 8): '#',
         (4, 1): 'WR2', (4, 2): '#', (4, 3): 'WQ1', (4, 4): '#', (4, 5): 'BQ1', (4, 6): 'BK1', (4, 7): '#', (4, 8): '#',
         (5, 1): 'WK1', (5, 2): '#', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): '#', (5, 8): '#',
         (6, 1): '#', (6, 2): '#', (6, 3): 'WB3', (6, 4): '#', (6, 5): 'BB2', (6, 6): '#', (6, 7): '#', (6, 8): '#',
         (7, 1): '#', (7, 2): '#', (7, 3): 'WN2', (7, 4): '#', (7, 5): 'BN2', (7, 6): '#', (7, 7): '#', (7, 8): '#',
         (8, 1): '#', (8, 2): '#', (8, 3): 'WR4', (8, 4): '#', (8, 5): 'BR2', (8, 6): '#', (8, 7): '#', (8, 8): '#'}

    print(get_sqr_case(board, 3, 9, 'W') == OOB)
    print(get_sqr_case(board, 4, 4, 'W') == EMPTY)
    print(get_sqr_case(board, 3, 3, 'W') == FRIEND)
    print(get_sqr_case(board, 4, 5, 'W') == ENEMY)

    print("\n")
