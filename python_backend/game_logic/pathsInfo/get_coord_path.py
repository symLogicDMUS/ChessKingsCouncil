from game_logic.step_funcs.step_funcs import *
from game_logic.sqr_case.oob import out_of_bounds
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def _get_coord_path(x, y, take_step):
    """
    travel a path from location (x, y) recording the coordinate of each square
    until step out of bounds. direction depends on which step function take_step is
    """
    x, y = take_step(x, y)
    coord_list = []
    while not out_of_bounds(x, y):
        coord_list.append((x, y))
        x, y = take_step(x, y)

    return coord_list


if __name__ == "__main__":
    
    # all tests passed

    board = sample_board_dicts['check_example3']

    # test 1, 90 degrees
    print('test 1:')
    coord_list = _get_coord_path(4, 4, step_1sqr90d)
    print(coord_list)
    print('\n')

    # test 2, 45 degrees
    print('test 2:')
    coord_list = _get_coord_path(4, 4, step_1sqr45d)
    print(coord_list)
    print('\n')

    # test 3, 0 degrees
    print('test 3:')
    coord_list = _get_coord_path(4, 4, step_1sqr0d)
    print(coord_list)
    print('\n')

    # test 4, 315 degrees
    print('test 4:')
    coord_list = _get_coord_path(4, 4, step_1sqr315d)
    print(coord_list)
    print('\n')

    # test 5, 270 degrees
    print('test 5:')
    coord_list = _get_coord_path(4, 4, step_1sqr270d)
    print(coord_list)
    print('\n')

    # test 6, 225 degrees
    print('test 6:')
    coord_list = _get_coord_path(4, 4, step_1sqr225d)
    print(coord_list)
    print('\n')

    # test 7, 180 degrees
    print('test 7:')
    coord_list = _get_coord_path(4, 4, step_1sqr180d)
    print(coord_list)
    print('\n')

    # test 8, 135 degrees
    print('test 8:')
    coord_list = _get_coord_path(4, 4, step_1sqr135d)
    print(coord_list)
    print('\n')
