from custom_except import *
from misc.step_funcs import *
from getters.get_sqr_case import get_sqr_case
from misc.sqr_cases import *
from printers.print_board import print_board


def travel_path(board, x, y, color, sqr_list, take_step):
    """travel the path adding squares to the list, then return the path"""
    sqr_case = get_sqr_case(board, x, y, color)

    if sqr_case == OOB:
        return sqr_list
    elif sqr_case == EMPTY:
        sqr_list.append((x, y))
        x, y = take_step(x, y)
        sqr_list = travel_path(board, x, y, color, sqr_list, take_step)
    elif sqr_case == ENEMY:
        sqr_list.append((x, y))
        return sqr_list
    elif sqr_case == FRIEND:
        return sqr_list
    else:
        print('error: square type not recognized')

    return sqr_list


def get_path(sqr, board, color, take_step):
    """ """
    x, y = take_step(sqr[0], sqr[1])
    return travel_path(board, x, y, color, [], take_step)


if __name__ == "__main__":
    # test 1:
    print("test  1:")
    board = \
        {(1, 1): '#', (1, 2): '#', (1, 3): 'WR3', (1, 4): '#', (1, 5): 'BR1', (1, 6): '#', (1, 7): '#', (1, 8): '#',
         (2, 1): 'WR1', (2, 2): '#', (2, 3): 'WN1', (2, 4): '#', (2, 5): 'BN1', (2, 6): '#', (2, 7): '#', (2, 8): '#',
         (3, 1): 'WB1', (3, 2): '#', (3, 3): 'WB2', (3, 4): '#', (3, 5): 'BB1', (3, 6): '#', (3, 7): '#', (3, 8): '#',
         (4, 1): 'WR2', (4, 2): '#', (4, 3): 'WQ1', (4, 4): '#', (4, 5): 'BQ1', (4, 6): 'BK1', (4, 7): '#', (4, 8): '#',
         (5, 1): 'WK1', (5, 2): '#', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): '#', (5, 8): '#',
         (6, 1): '#', (6, 2): '#', (6, 3): 'WB3', (6, 4): '#', (6, 5): 'BB2', (6, 6): '#', (6, 7): '#', (6, 8): '#',
         (7, 1): '#', (7, 2): '#', (7, 3): 'WN2', (7, 4): '#', (7, 5): 'BN2', (7, 6): '#', (7, 7): '#', (7, 8): '#',
         (8, 1): '#', (8, 2): '#', (8, 3): 'WR4', (8, 4): '#', (8, 5): 'BR2', (8, 6): '#', (8, 7): '#', (8, 8): '#'}

    # test a white bishop
    path = get_path((6, 3), board, 'W', step_1sqr45d)
    print_board(board, heading=(6, 3), highlights=path)

    path = get_path((6, 3), board, 'W', step_1sqr315d)
    print_board(board, heading=(6, 3), highlights=path)

    path = get_path((6, 3), board, 'W', step_1sqr225d)
    print_board(board, heading=(6, 3), highlights=path)

    path = get_path((6, 3), board, 'W', step_1sqr135d)
    print_board(board, heading=(6, 3), highlights=path)

    # test a black rook
    path = get_path((1, 5), board, 'B', step_1sqr90d)
    print_board(board, heading=(1, 5), highlights=path)

    path = get_path((1, 5), board, 'B', step_1sqr0d)
    print_board(board, heading=(1, 5), highlights=path)

    path = get_path((1, 5), board, 'B', step_1sqr270d)
    print_board(board, heading=(1, 5), highlights=path)

    path = get_path((1, 5), board, 'B', step_1sqr180d)
    print_board(board, heading=(1, 5), highlights=path)

