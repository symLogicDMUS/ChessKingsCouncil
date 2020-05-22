from custom_except import *
from getters.get_pathdata_dict import get_pathdata_dict


def get_num_path_attackers(pd_dict):
    """get the number of Rooks, Bishops, or Queens, that are attacking the King"""
    num_path_attackers = 0
    for direction in pd_dict.keys():
        if len(pd_dict[direction].pieces) == 0:
            continue
        if pd_dict[direction].statuses[0] != 'e':
            continue
        if not pd_dict[direction].piece_matches_path[0]:
            continue
        num_path_attackers += 1
    return num_path_attackers


if __name__ == "__main__":
    # test 1, check_example3, 3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1
    print('test 1:')
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

    pathdata_dict = get_pathdata_dict((4, 4), board, 'W')
    print(get_num_path_attackers(pathdata_dict))
    print('\n')

    # test 2, super_checkmate_impossible_example, :
    print('test 2:')
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): 'BR3', (7, 8): 'BK1', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BN1', (5, 7): 'BP1', (6, 7): '#', (7, 7): 'BP2', (8, 7): '#',
         (1, 6): 'BR2', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WK1', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): 'BB1',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): 'BQ1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): 'BR1', (7, 1): '#', (8, 1): '#'}

    pathdata_dict = get_pathdata_dict((6, 6), board, 'W')
    print(get_num_path_attackers(pathdata_dict))
    print('\n')
