from game_logic.coordType import *
from game_logic.coordType.xy.to_xy import to_xy
from game_logic.piece_type.is_piece import is_piece
from game_logic.printers.print_board import print_board
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def ply(board, start, dest):
    """move piece to new square, capturing piece there if there is"""
    if start == dest:
        return board, 'None'
    if is_piece(board[dest]):
        captured = board[dest]
    else:
        captured = 'None'
    board[dest] = board[start]
    board[start] = '#'
    return board, captured


if __name__ == "__main__":
    start = ""
    dest = ""
    board = sample_board_dicts['new']
    print_board(board)
    while start != "X" and dest != "X":
        start = input("start:")
        dest = input("dest:")
        start = to_xy(start)
        dest = to_xy(dest)
        board, captured = ply(board, start, dest)
        print_board(board)
        print("captured:", captured)
