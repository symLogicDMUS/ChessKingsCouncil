from game_logic.sqr_case.is_empty_sqr import is_empty_sqr
from game_logic.printers.get_unicode_piece import get_unicode_piece
from game_logic.color import get_color
from termcolor import colored
from game_logic.printers import checkerboard


def print_board_highlight_sd(board_dict, start, dest, heading=""):
    """print board_dict, highlight the start and destination squares of a piece making a move"""
    print(heading)
    for y in range(8, 0, -1):
        print(y, end=" ")
        for x in range(1, 9):
            if not is_empty_sqr(board_dict[x, y]):
                color = get_color(board_dict[x, y])
                uni_piece = get_unicode_piece(board_dict[x, y])
                if start is not None and dest is not None and ((x, y) == start or (x, y) == dest):
                    if (x, y) == start:
                        c = 'cyan'
                    else:
                        c = 'red'
                    print(colored(uni_piece, color=c), end="")
                else:
                    print(uni_piece, end="")
            else:
                if start is not None and dest is not None and ((x, y) == start or (x, y) == dest):
                    if (x, y) == start:
                        c = 'cyan'
                    else:
                        c = 'red'
                    print(colored(checkerboard[x, y], color=c), end="")
                else:
                    print(checkerboard[x, y], end="")
        print("")
    print("  a b c d e f g h")
