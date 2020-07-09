from game_logic.threatArea.get_hypo_board import get_hypo_board
from game_logic.printers.print_board import print_board
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from pprint import pprint


def get_hypo_boards(board, king_loc, init_range, color):
    """
    get one dict of boards, where each board the king has moved to a square in its initial range. The key is the location
    the king moved to for that board.
    """
    boards = {}
    for dest in init_range:
        boards[dest] = get_hypo_board(board, king_loc, dest)
    return boards


if __name__ == "__main__":
    """
    board = sample_board_dicts['king_range_test']
    init_moves = [(3, 4), (5, 4), (3, 3), (5, 3), (3, 2), (4, 2)]
    hypo_boards = get_hypo_boards(board, (4, 3), init_moves, 'W')
    print("actual king location ({}, {})".format(4, 3))
    for king_loc, board in hypo_boards.items():
        print_board(board, heading="{}".format(king_loc), highlights=[(4, 3)])
    print('')
    """
    print("super_checkmate_impossible_example")
    board = sample_board_dicts['super_checkmate_impossible_example']
    hypo_boards = get_hypo_boards(board, (6, 6), [(5, 5), (6, 5), (7, 5), (5, 6), (7, 6), (5, 7), (6, 7), (7, 7)], "W")
    pprint(hypo_boards)
    for board_ in hypo_boards.values():
        print_board(board_, highlights=[(6, 6)])