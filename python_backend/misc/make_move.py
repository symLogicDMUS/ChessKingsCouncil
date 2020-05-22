
from bools.is_valid_input import is_valid_input
from bools.exit_ import exit_
from coordType.to_xy import to_xy
from getters.get_input import get_input
from getters.get_random_move import get_random_move
from movePiece.attempt_move import attempt_move
from termcolor import colored
from printers.print_board import print_board


def make_move(board, start, dest, color, final_ranges, special_moves):
    """get a move from user input or from computer and return"""
    moved, x = False, False
    while not moved and not x:
        start, dest = get_input(turn=color)
        if not is_valid_input(start) or not is_valid_input(dest):
            print_board(board, heading="Invalid move. Try again.")
            continue
        elif exit_(start, dest):
            x = True
        else:
            start = to_xy(start)
            dest = to_xy(dest)
            board, captured, moved = attempt_move(board, start, dest, color, final_ranges, special_moves)
            if not moved:
                print_board(board, heading="Invalid move. Try again.")
    return start, dest, board, captured, x
