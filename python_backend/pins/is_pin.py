from custom_except import *
from getters.get_pathdata_dict import get_pathdata_dict


def is_pin(path_data):
    """return true if the path contains a pinned piece, otherwise false 
    
        path_data: see class _PathData
    """
    if len(path_data.statuses) < 2:
        return False
    if path_data.statuses[0] != 'f':
        return False
    if path_data.statuses[1] != 'e':
        return False
    if not path_data.piece_matches_path[1]:
        return False

    return True


if __name__ == '__main__':
    board =\
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
    path_dict = get_pathdata_dict((4, 4), board, 'W')
    for path in path_dict.values():
        print("{}, {}".format(path.coord_path, is_pin(path)))
    print('\n')

    board =\
    {(1, 8): 'BR1', (2, 8): 'BN1', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): 'BN2', (8, 8): 'BR2',
    (1, 7): 'BP1', (2, 7): 'BP2', (3, 7): 'BP3', (4, 7): 'BP4', (5, 7): 'BP5', (6, 7): 'BP6', (7, 7): 'BP7', (8, 7): 'BP8',
    (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
    (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
    (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#',
    (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
    (1, 2): 'WP1', (2, 2): 'WP2', (3, 2): 'WP3', (4, 2): 'WP4', (5, 2): 'WP5', (6, 2): 'WP6', (7, 2): 'WP7', (8, 2): 'WP8',
    (1, 1): 'WR1', (2, 1): 'WN1', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB2', (7, 1): 'WN2', (8, 1): 'WR2'}

    # test 2:
    print('test 1:')
    path_dict = get_pathdata_dict((4, 4), board, 'W')
    for path in path_dict.values():
        print("{}, {}".format(path, is_pin(path)))
    print('\n')

