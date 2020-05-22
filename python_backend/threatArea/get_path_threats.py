from custom_except import *
from getters.get_pathdata_dict import get_pathdata_dict
from pathsInfo.get_index_first_piece import get_index_first_piece


def get_path_threats(sqr, board, color):
    """get all squares that are path threats to sqr"""

    path_dict = get_pathdata_dict(sqr, board, color)
    path_threats = []
    for direction in path_dict.keys():
        if len(path_dict[direction].pieces) == 0:
            continue
        if path_dict[direction].statuses[0] != 'e':
            continue
        if not path_dict[direction].piece_matches_path[0]:
            continue
        i = get_index_first_piece(path_dict[direction].path)
        path_threats.extend(path_dict[direction].coord_path[:i + 1])

    return path_threats


if __name__ == "__main__":
    board = \
        {(1, 1): 'BB1', (1, 2): '#', (1, 3): '#', (1, 4): 'BQ3', (1, 5): '#', (1, 6): '#', (1, 7): 'BQ4', (1, 8): '#',
         (2, 1): '#', (2, 2): '#', (2, 3): '#', (2, 4): '#', (2, 5): '#', (2, 6): '#', (2, 7): '#', (2, 8): '#',
         (3, 1): '#', (3, 2): '#', (3, 3): 'WN1', (3, 4): 'WQ1', (3, 5): '#', (3, 6): '#', (3, 7): '#', (3, 8): '#',
         (4, 1): 'BQ1', (4, 2): 'WR1', (4, 3): 'WP1', (4, 4): 'WK1', (4, 5): '#', (4, 6): 'WP2', (4, 7): 'BR2',
         (4, 8): 'BK1',
         (5, 1): '#', (5, 2): '#', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): '#', (5, 8): '#',
         (6, 1): '#', (6, 2): 'WR2', (6, 3): '#', (6, 4): 'WQ2', (6, 5): '#', (6, 6): 'WP3', (6, 7): '#', (6, 8): '#',
         (7, 1): 'BQ2', (7, 2): '#', (7, 3): '#', (7, 4): 'WB1', (7, 5): '#', (7, 6): '#', (7, 7): 'WP4', (7, 8): '#',
         (8, 1): '#', (8, 2): '#', (8, 3): '#', (8, 4): 'BR1', (8, 5): '#', (8, 6): '#', (8, 7): '#', (8, 8): 'BB2'}

    # test 1:
    print('test 1:')
    path_threats = get_path_threats((4, 4), board, 'W')
    print(path_threats)
    print('\n')
