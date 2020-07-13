from game_logic.printers.get_unicode_piece import get_unicode_piece
from game_logic.printers.checker_board import checkerboard
from game_logic.piece_type.is_piece import is_piece
from termcolor import colored


def print_board(board, heading="", highlights=[], highlights2=[], highlights3=[], highlights4=[]):
    """print board_dict in increasing order of x, decreasing order of y (how 2d board normally displayed)"""
    print(heading)
    for y in range(8, 0, -1):
        print(y, end=" ")
        for x in range(1, 9):
            if is_piece(board[x, y]):
                char = get_unicode_piece(board[x, y])
            else:
                char = checkerboard[x, y]
            if highlights and (x, y) in highlights:
                print(colored(char, 'red'), end="")
            elif highlights2 and (x, y) in highlights2:
                print(colored(char, 'green'), end="")
            elif highlights3 and (x, y) in highlights3:
                print(colored(char, 'blue'), end="")
            elif highlights4 and (x, y) in highlights4:
                print(colored(char, 'yellow'), end="")
            else:
                print(char, end="")
        print("")
    print("  a b c d e f g h")


if __name__ == "__main__":
    print_board(
        {(1, 1): 'WR1', (1, 2): 'WP1', (1, 3): '#', (1, 4): '#', (1, 5): '#', (1, 6): '#', (1, 7): 'BP1', (1, 8): 'BR1',
         (2, 1): 'WN1', (2, 2): 'WP2', (2, 3): '#', (2, 4): '#', (2, 5): '#', (2, 6): '#', (2, 7): 'BP2', (2, 8): 'BN1',
         (3, 1): 'WB1', (3, 2): 'WP3', (3, 3): '#', (3, 4): '#', (3, 5): '#', (3, 6): '#', (3, 7): 'BP3', (3, 8): 'BB1',
         (4, 1): 'WQ1', (4, 2): 'WP4', (4, 3): '#', (4, 4): '#', (4, 5): '#', (4, 6): '#', (4, 7): 'BP4', (4, 8): 'BQ1',
         (5, 1): 'WK1', (5, 2): 'WP5', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): 'BP5', (5, 8): 'BK1',
         (6, 1): 'WB2', (6, 2): 'WP6', (6, 3): '#', (6, 4): '#', (6, 5): '#', (6, 6): '#', (6, 7): 'BP6', (6, 8): 'BB2',
         (7, 1): 'WN2', (7, 2): 'WP7', (7, 3): '#', (7, 4): '#', (7, 5): '#', (7, 6): '#', (7, 7): 'BP7', (7, 8): 'BN2',
         (8, 1): 'WR2', (8, 2): 'WP8', (8, 3): '#', (8, 4): '#', (8, 5): '#', (8, 6): '#', (8, 7): 'BP8',
         (8, 8): 'BR2'})

    print_board(
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): 'BR3', (7, 8): 'BK1', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BN1', (5, 7): 'BP1', (6, 7): '#', (7, 7): 'BP2', (8, 7): '#',
         (1, 6): 'BR2', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WK1', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): 'BB1',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): 'BQ1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): 'BR1', (7, 1): '#', (8, 1): '#'})