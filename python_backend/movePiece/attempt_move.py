from custom_except import *
from getters.get_color import get_color
from bools.is_piece import is_piece
from bools.is_valid_input import is_valid_input
from movePiece.is_legal import is_legal
from movePiece.move import move
from coordType.to_xy import to_xy


def attempt_move(board, start, dest, color, ranges, special_moves):
    """:returns board, captured, moved"""
    if not is_piece(board[start]):
        return board, 'None', False
    if get_color(board[start]) != color:
        return board, 'None', False
    if start == dest:
        return board, 'None', False
    if not is_legal(ranges, board, start, dest):
        return board, 'None', False
    board, captured = move(board, start, dest, color, special_moves)
    return board, captured, True


if __name__ == "__main__":
    pass # TODO: implement test

