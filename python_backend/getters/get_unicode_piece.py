from custom_except import *
from misc.unicode_pieces import unicode_pieces
from getters.get_piece_type import get_piece_type
from getters.get_color import get_color


def get_unicode_piece(id_):
    """take a piece type or a piece id, and return a corresponding fen id"""
    piece_type = get_piece_type(id_)
    color = get_color(id_)
    return unicode_pieces[color][piece_type]
