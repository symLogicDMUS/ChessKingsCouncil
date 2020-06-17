from step_funcs.step_funcs import *
from sqr_case.oob import out_of_bounds


def _get_path(board, x, y, take_step):
    """
    travel a path starting at location (x, y) until step out of bounds. add assign_ids
    to list. direction moving depends on which step function take_step is
    """
    x, y = take_step(x, y)
    sqr_list = []
    while not out_of_bounds(x, y):
        sqr_list.append(board[(x, y)])
        x, y = take_step(x, y)

    return sqr_list


if __name__ == "__main__":
    
    # all tests passed

    board =\
    {(1, 1): 'BB1', (1, 2): '#', (1, 3): '#', (1, 4): 'BQ3', (1, 5): '#', (1, 6): '#', (1, 7): 'BQ4', (1, 8): '#', 
        (2, 1): '#', (2, 2): '#', (2, 3): '#', (2, 4): '#', (2, 5): '#', (2, 6): '#', (2, 7): '#', (2, 8): '#', 
        (3, 1): '#', (3, 2): '#', (3, 3): 'WN1', (3, 4): 'WQ1', (3, 5): '#', (3, 6): '#', (3, 7): '#', (3, 8): '#', 
        (4, 1): 'BQ1', (4, 2): 'WR1', (4, 3): 'WP1', (4, 4): 'WK1', (4, 5): '#', (4, 6): 'WP2', (4, 7): 'BR2', (4, 8): 'BK1', 
        (5, 1): '#', (5, 2): '#', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): '#', (5, 8): '#', 
        (6, 1): '#', (6, 2): 'WR2', (6, 3): '#', (6, 4): 'WQ2', (6, 5): '#', (6, 6): 'WP3', (6, 7): '#', (6, 8): '#', 
        (7, 1): 'BQ2', (7, 2): '#', (7, 3): '#', (7, 4): 'WB1', (7, 5): '#', (7, 6): '#', (7, 7): 'WP4', (7, 8): '#', 
        (8, 1): '#', (8, 2): '#', (8, 3): '#', (8, 4): 'BR1', (8, 5): '#', (8, 6): '#', (8, 7): '#', (8, 8): 'BB2'}

    # test 1, 90 degrees
    print('test 1:')
    sqr_list = _get_path(board, 4, 4, step_1sqr90d)
    print(sqr_list)
    print('\n')

    # test 2, 45 degrees
    print('test 2:')
    sqr_list = _get_path(board, 4, 4, step_1sqr45d)
    print(sqr_list)
    print('\n')

    # test 3, 0 degrees
    print('test 3:')
    sqr_list = _get_path(board, 4, 4, step_1sqr0d)
    print(sqr_list)
    print('\n')

    # test 4, 315 degrees
    print('test 4:')
    sqr_list = _get_path(board, 4, 4, step_1sqr315d)
    print(sqr_list)
    print('\n')

    # test 5, 270 degrees
    print('test 5:')
    sqr_list = _get_path(board, 4, 4, step_1sqr270d)
    print(sqr_list)
    print('\n')

    # test 6, 225 degrees
    print('test 6:')
    sqr_list = _get_path(board, 4, 4, step_1sqr225d)
    print(sqr_list)
    print('\n')

    # test 7, 180 degrees
    print('test 7:')
    sqr_list = _get_path(board, 4, 4, step_1sqr180d)
    print(sqr_list)
    print('\n')

    # test 8, 135 degrees
    print('test 8:')
    sqr_list = _get_path(board, 4, 4, step_1sqr135d)
    print(sqr_list)
    print('\n')
