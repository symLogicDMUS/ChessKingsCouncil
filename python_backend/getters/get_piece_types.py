from custom_except import *
from getters.get_piece_type import get_piece_type


def get_piece_types(board):
    """get the type of piece of every piece instance on board. sort alphabetically and return"""
    piece_ids = list(filter(lambda id_: id_ != '#', board.values()))
    piece_types = list(map(lambda id_: get_piece_type(id_), piece_ids))
    piece_types.sort()
    return piece_types

