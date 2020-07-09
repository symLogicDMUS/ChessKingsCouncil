from game_logic.sqr_case.sqr_cases import OOB, EMPTY, FRIEND, ENEMY
from game_logic.sqr_case.oob import out_of_bounds
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_sqr_case(board, x, y, color):
    """get the case of square at location x, y on the board. see sqr_types.py"""

    if out_of_bounds(x, y):
        return OOB
    elif board[(x, y)] == '#':
        return EMPTY
    elif board[(x, y)][0] == color:
        return FRIEND
    else:
        return ENEMY


if __name__ == "__main__":
    # test 1:
    print("test  1:")
    board = sample_board_dicts['ranges_test']
    print(get_sqr_case(board, 3, 9, 'W') == OOB)
    print(get_sqr_case(board, 4, 4, 'W') == EMPTY)
    print(get_sqr_case(board, 3, 3, 'W') == FRIEND)
    print(get_sqr_case(board, 4, 5, 'W') == ENEMY)
    print("\n")
