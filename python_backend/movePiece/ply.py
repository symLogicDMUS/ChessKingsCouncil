from piece_type.is_piece import is_piece
from printers.print_board import print_board
from coordType import *


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
    board = \
        {(1, 1): 'WR1', (1, 2): 'WP1', (1, 3): '#', (1, 4): '#', (1, 5): '#', (1, 6): '#', (1, 7): 'BP1', (1, 8): 'BR1',
         (2, 1): 'WN1', (2, 2): 'WP2', (2, 3): '#', (2, 4): '#', (2, 5): '#', (2, 6): '#', (2, 7): 'BP2', (2, 8): 'BN1',
         (3, 1): 'WB1', (3, 2): 'WP3', (3, 3): '#', (3, 4): '#', (3, 5): '#', (3, 6): '#', (3, 7): 'BP3', (3, 8): 'BB1',
         (4, 1): 'WQ1', (4, 2): 'WP4', (4, 3): '#', (4, 4): '#', (4, 5): '#', (4, 6): '#', (4, 7): 'BP4', (4, 8): 'BQ1',
         (5, 1): 'WK1', (5, 2): 'WP5', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): 'BP5', (5, 8): 'BK1',
         (6, 1): 'WB2', (6, 2): 'WP6', (6, 3): '#', (6, 4): '#', (6, 5): '#', (6, 6): '#', (6, 7): 'BP6', (6, 8): 'BB2',
         (7, 1): 'WN2', (7, 2): 'WP7', (7, 3): '#', (7, 4): '#', (7, 5): '#', (7, 6): '#', (7, 7): 'BP7', (7, 8): 'BN2',
         (8, 1): 'WR2', (8, 2): 'WP8', (8, 3): '#', (8, 4): '#', (8, 5): '#', (8, 6): '#', (8, 7): 'BP8', (8, 8): 'BR2'}

    start = ""
    dest = ""
    print_board(board)
    while start != "X" and dest != "X":
        start = input("start:")
        dest = input("dest:")
        start = to_xy(start)
        dest = to_xy(dest)
        board, captured = ply(board, start, dest)
        print_board(board)
        print("captured:", captured)
