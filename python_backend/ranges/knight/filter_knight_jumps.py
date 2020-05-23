from custom_except import *
from getters.get_sqr_case import get_sqr_case
from misc.sqr_cases import *


def filter_knight_jumps(board, start_jumps, color):
    """filter list of potential knight threats to get actual knight threats and return """
    return list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) != FRIEND
                                   and get_sqr_case(board, sqr[0], sqr[1], color) != OOB, start_jumps))


if __name__ == "__main__":
    # test 1:
    print('test 1:')
    board = \
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
         (1, 2): 'WP1', (2, 2): '#', (3, 2): 'BN1', (4, 2): '#', (5, 2): 'WQ1', (6, 2): 'WP2', (7, 2): 'WP3',
         (8, 2): 'WP4',
         (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WB1', (5, 3): 'WB2', (6, 3): 'WN2', (7, 3): '#', (8, 3): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): 'WP5', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 5): 'BP1', (2, 5): 'WP6', (3, 5): '#', (4, 5): 'BP2', (5, 5): 'BP3', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN2', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): 'BP4', (3, 7): 'BP5', (4, 7): '#', (5, 7): 'BQ1', (6, 7): 'BP6', (7, 7): 'BP7',
         (8, 7): 'BP8',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): 'BR2', (7, 8): 'BK1', (8, 8): '#'}

    start_jumps = [(2, 5), (4, 5), (2, 1), (4, 1), (5, 4), (1, 4), (5, 2), (1, 2)]
    initial_range = filter_knight_jumps(board, start_jumps, 'W')
    print(initial_range)
    print('\n')
