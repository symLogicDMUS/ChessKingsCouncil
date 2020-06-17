from step_funcs.step_funcs import *
from pathsInfo.get_path_dir import _get_path_dir
from pathsInfo.pathData import _PathData
from pathsInfo.get_path_data import _get_path_data


def get_pathdata_dict(sqr, board, color):
    """get data about every path stemming from sqr, and record in dict"""

    pd_dict = {}
    for step_func in step_func_list:
        # get direction of path
        path_dir = _get_path_dir(step_func)

        # initialize class
        pd_dict[path_dir] = _PathData(path_dir)

        # get path data
        path_data = _get_path_data(sqr, board, step_func, path_dir, color)
        pd_dict[path_dir].coord_path = path_data[0]
        pd_dict[path_dir].path = path_data[1]
        pd_dict[path_dir].pieces = path_data[2]
        pd_dict[path_dir].statuses = path_data[3]
        pd_dict[path_dir].piece_matches_path = path_data[4]

    return pd_dict


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
    pd_dict = get_pathdata_dict((4, 4), board, 'W')
    print('test 1:')
    for path in pd_dict.values():
        print(path)
    print('\n')
