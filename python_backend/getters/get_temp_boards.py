
from getters.get_temp_board import get_temp_board


def get_temp_boards(board, king_loc, init_range, color):
    """
    get one dict of boards, where each board the king has moved to a square in its initial range. The key is the location
    the king moved to for that board.
    """
    boards = {}
    for dest in init_range:
        boards[dest] = get_temp_board(board, king_loc, dest)
    return boards

