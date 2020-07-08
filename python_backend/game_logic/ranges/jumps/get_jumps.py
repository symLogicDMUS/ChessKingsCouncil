import copy
from game_logic.printers.print_board import print_board
from game_logic.ranges.jumps.get_init_jumps import get_init_jumps
from game_logic.ranges.jumps.filter_init_jumps import filter_init_jumps


def get_jumps(offsets, board, sqr, color):
    """jumps are square that can be reached through a piece jumping"""
    jumps = get_init_jumps(offsets, board, sqr, color)
    jumps = filter_init_jumps(jumps, board, color)
    return jumps


if __name__ == "__main__":
    offsets = [
        [1, 1],
        [1, 2],
        [1, 3],
        [-1, 1],
        [-1, 2],
        [-1, 3],
        [1, -1],
        [1, -2],
        [1, -3],
        [-1, -1],
        [-1, -2],
        [-1, -3]]

    board = \
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): 'WN1', (2, 3): 'WB1', (3, 3): 'WQ1', (4, 3): 'BB1', (5, 3): '#', (6, 3): 'BQ1', (7, 3): '#',
         (8, 3): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'BB2', (5, 4): '#', (6, 4): 'WB2', (7, 4): 'BP1', (8, 4): 'WP1',
         (1, 5): 'BP2', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): 'BN1', (6, 5): '#', (7, 5): '#', (8, 5): 'BP3',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WP2', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): 'WP3', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    jumps = get_jumps(copy.deepcopy(offsets), board, (1, 3), 'W')
    print_board(board, highlights=jumps)

    jumps = get_jumps(copy.deepcopy(offsets), board, (5, 5), 'B')
    print_board(board, highlights=jumps)
