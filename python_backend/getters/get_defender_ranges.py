from custom_except import *
from getters.get_piece_type import get_piece_type
from copy import deepcopy


def get_defender_ranges(ranges):
    """ """
    king_ids = list(filter(lambda id_: get_piece_type(id_) == 'King', ranges.keys()))
    defender_ranges = deepcopy(ranges)
    for k in king_ids:
        del defender_ranges[k]
    return defender_ranges


if __name__ == "__main__":
    pass  # TODO: implement test
