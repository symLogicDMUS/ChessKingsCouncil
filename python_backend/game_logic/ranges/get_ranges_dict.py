from pprint import pprint
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_range_dict(board):
    """initialize dict with key = piece id and value = range of piece"""
    ranges = {}
    for id_ in board.values():
        if id_ == '#':
            continue
        else:
            ranges[id_] = []

    return ranges


if __name__ == "__main__":
    board = sample_board_dicts['ranges_test']
    ranges = get_range_dict(board)
    pprint(ranges)