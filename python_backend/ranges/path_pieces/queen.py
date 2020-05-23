from misc.step_funcs import *
from ranges.path_pieces.get_path import get_path
from printers.print_board import print_board


def queen(sqr, board, color):
    """get the initial range of queen of given color, located at sqr"""
    initial_range = []
    initial_range.extend(get_path(sqr, board, color, step_1sqr0d))
    initial_range.extend(get_path(sqr, board, color, step_1sqr45d))
    initial_range.extend(get_path(sqr, board, color, step_1sqr90d))
    initial_range.extend(get_path(sqr, board, color, step_1sqr135d))
    initial_range.extend(get_path(sqr, board, color, step_1sqr180d))
    initial_range.extend(get_path(sqr, board, color, step_1sqr225d))
    initial_range.extend(get_path(sqr, board, color, step_1sqr270d))
    initial_range.extend(get_path(sqr, board, color, step_1sqr315d))

    return initial_range


if __name__ == "__main__":
    # test 1:
    print('test 1, W, (4, 3):')
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'BK1', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BR1', (2, 5): 'BN1', (3, 5): 'BB1', (4, 5): 'BQ1', (5, 5): '#', (6, 5): 'BB2', (7, 5): 'BN2',
         (8, 5): 'BR2',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): 'WR3', (2, 3): 'WN1', (3, 3): 'WB2', (4, 3): 'WQ1', (5, 3): '#', (6, 3): 'WB3', (7, 3): 'WN2',
         (8, 3): 'WR4',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): '#', (2, 1): 'WR1', (3, 1): 'WB1', (4, 1): 'WR2', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): '#'}

    print_board(board, highlights=queen((4, 3), board, 'W'))
    print('\n')

    # test 2:
    print('test 2, B, (4, 5):')
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'BK1', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BR1', (2, 5): 'BN1', (3, 5): 'BB1', (4, 5): 'BQ1', (5, 5): '#', (6, 5): 'BB2', (7, 5): 'BN2',
         (8, 5): 'BR2',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): 'WR3', (2, 3): 'WN1', (3, 3): 'WB2', (4, 3): 'WQ1', (5, 3): '#', (6, 3): 'WB3', (7, 3): 'WN2',
         (8, 3): 'WR4',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): '#', (2, 1): 'WR1', (3, 1): 'WB1', (4, 1): 'WR2', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): '#'}

    print_board(board, highlights=queen((4, 5), board, 'B'))
    print('\n')
