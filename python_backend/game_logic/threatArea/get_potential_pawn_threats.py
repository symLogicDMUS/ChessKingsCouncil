from math import sqrt
from game_logic.helpers.formulas import dist
from game_logic.printers.print_board import print_board
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_potential_pawn_threats(board, sqr, color):
    """ return list of locations that might be pawn attacking king """

    if color == 'W':  # >
        return list(filter(lambda sqr2: sqr2[1] > sqr[1] and dist(sqr, sqr2) == sqrt(2), board.keys()))
    elif color == 'B':  # <
        return list(filter(lambda sqr2: sqr2[1] < sqr[1] and dist(sqr, sqr2) == sqrt(2), board.keys()))
    else:
        print('error: color not recognized\n')
        return -1


if __name__ == "__main__":
    board = sample_board_dicts['pawn_threat1']
    # test 1:
    print('test 1:')
    print_board(board, highlights=get_potential_pawn_threats(board, (6, 3), 'W'))
    print('\n')

    # test 2:
    print('test 2:')
    print_board(board, highlights=get_potential_pawn_threats(board, (3, 5), 'B'))
