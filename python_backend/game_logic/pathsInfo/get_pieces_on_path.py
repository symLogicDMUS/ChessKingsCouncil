from game_logic.sqr_case.oob import out_of_bounds
from game_logic.step_funcs.step_funcs import *
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def _get_pieces_on_path(board, x, y, take_step):
    """
    travel a path starting at location (x, y) until step out of bounds. add each
    piece id encountered to list
    """
    x, y = take_step(x, y)
    piece_list = []
    while not out_of_bounds(x, y):
        if board[(x, y)] != '#':
            piece_list.append(board[(x, y)])
        x, y = take_step(x, y)

    return piece_list


if __name__ == "__main__":

    board = sample_board_dicts['check_example3']

    # test 1, 90 degrees
    print('test 1:')
    piece_list = _get_pieces_on_path(board, 4, 4, step_1sqr90d)
    print(piece_list)
    print('\n')

    # test 2, 45 degrees
    print('test 2:')
    piece_list = _get_pieces_on_path(board, 4, 4, step_1sqr45d)
    print(piece_list)
    print('\n')

    # test 3, 0 degrees
    print('test 3:')
    piece_list = _get_pieces_on_path(board, 4, 4, step_1sqr0d)
    print(piece_list)
    print('\n')

    # test 4, 315 degrees
    print('test 4:')
    piece_list = _get_pieces_on_path(board, 4, 4, step_1sqr315d)
    print(piece_list)
    print('\n')

    # test 5, 270 degrees
    print('test 5:')
    piece_list = _get_pieces_on_path(board, 4, 4, step_1sqr270d)
    print(piece_list)
    print('\n')

    # test 6, 225 degrees
    print('test 6:')
    piece_list = _get_pieces_on_path(board, 4, 4, step_1sqr225d)
    print(piece_list)
    print('\n')

    # test 7, 180 degrees
    print('test 7:')
    piece_list = _get_pieces_on_path(board, 4, 4, step_1sqr180d)
    print(piece_list)
    print('\n')

    # test 8, 135 degrees
    print('test 8:')
    piece_list = _get_pieces_on_path(board, 4, 4, step_1sqr135d)
    print(piece_list)
    print('\n')
