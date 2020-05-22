
from threatArea.get_potential_knight_threats import get_potential_knight_threats as get_starting_jumps
from ranges.filter_knight_jumps import filter_knight_jumps


def knight(sqr, board, color):
    """fget the initial range of knight of given color, located at sqr"""
    starting_jumps = get_starting_jumps(sqr, board)
    init_range = filter_knight_jumps(board, starting_jumps, color)
    return init_range


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

    print(knight((3, 3), board, 'W'))
    print('\n')
