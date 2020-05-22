
from termcolor import colored


def print_sqr_highlights(uni_board, sqrs, color, heading="", color_="cyan", sqrs_=[]):
    """print all squares in uni_board, and print the ones in sqrs list as color given"""
    if heading != "":
        print(heading)
    for y in range(8, 0, -1):
        for x in range(1, 9):
            if (x, y) in sqrs_:
                print(colored(uni_board[x, y], color_), end="")
            elif (x, y) in sqrs:
                print(colored(uni_board[x, y], color), end="")
            else:
                print(uni_board[x, y], end="")
        print("")
    print("")


if __name__ == "__main__":
    pass  # TODO: implement test
