import copy
from game_logic.printers.print_board import print_board
from game_logic.ranges.jumps.get_init_jumps import get_init_jumps
from game_logic.ranges.jumps.filter_init_jumps import filter_init_jumps
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_jumps(offsets, board, sqr, color):
    """jumps are square that can be reached through a piece jumping"""
    jumps = get_init_jumps(offsets, board, sqr, color)
    jumps = filter_init_jumps(jumps, board, color)
    return jumps


if __name__ == "__main__":
    offsets = [
        [1, 1],
        [1, 2],
        [1, 3],
        [-1, 1],
        [-1, 2],
        [-1, 3],
        [1, -1],
        [1, -2],
        [1, -3],
        [-1, -1],
        [-1, -2],
        [-1, -3]]

    board = sample_board_dicts['castle_test1']

    jumps = get_jumps(copy.deepcopy(offsets), board, (1, 3), 'W')
    print_board(board, highlights=jumps)

    jumps = get_jumps(copy.deepcopy(offsets), board, (5, 5), 'B')
    print_board(board, highlights=jumps)
