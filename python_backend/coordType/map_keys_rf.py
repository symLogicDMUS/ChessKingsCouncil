from custom_except import *
from coordType.to_rankfile import to_rankfile


def map_keys_rf(board):
    """ """
    rf_board = {}
    for xy in board.keys():
        rf_board[to_rankfile(xy)] = board[xy]
    return rf_board


if __name__ == "__main__":
    pass