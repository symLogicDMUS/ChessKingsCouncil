from game_logic.threatArea.top.sqr_under_attack import sqr_under_attack
from itertools import product


def safe_path(board, path, color, range_defs, id_dict):
    """ return true if every square on path is not under attack, else return false"""
    for sqr in path:
        if sqr_under_attack(board, sqr, color, range_defs, id_dict):
            break
    else:
        return True

    return False


if __name__ == "__main__":

    # test 1:

    print('test 1:')

    board = \
        {(1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2',
         (1, 7): '#', (2, 7): 'WP3', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WP2', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BP2', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): 'BN1', (6, 5): '#', (7, 5): '#', (8, 5): 'BP3',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'BB2', (5, 4): '#', (6, 4): 'WB2', (7, 4): 'BP1', (8, 4): 'WP1',
         (1, 3): 'WN1', (2, 3): 'WB1', (3, 3): 'WQ1', (4, 3): 'BB1', (5, 3): '#', (6, 3): 'BQ1', (7, 3): '#',
         (8, 3): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2'}

    for x in range(1, 9):
        print(safe_path(board, list(product([1, 2, 3, 4, 5, 6, 7, 8], [x])), 'W'))

    print('\n')

    # test 2:

    print('test 2:')

    board = \
        {(1, 1): '#', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): '#', (7, 1): '#', (8, 1): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): 'BK1', (5, 3): 'WK1', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'WN1', (5, 4): 'BN1', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): 'WR1', (4, 5): 'BB1', (5, 5): 'WB1', (6, 5): 'BR1', (7, 5): '#', (8, 5): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'WQ1', (5, 6): 'BQ1', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#'}

    for x in range(1, 9):
        print(safe_path(board, list(product([1, 2, 3, 4, 5, 6, 7, 8], [x])), 'W'))

    print('\n')