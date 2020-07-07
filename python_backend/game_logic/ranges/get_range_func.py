from game_logic.ranges.special_defs import _special_defs


def get_range_func(piece_type):
    """return the function that gets the range for piece_type """
    return _special_defs[piece_type]


if __name__ == "__main__":
    print(get_range_func('Rook'))
    print(get_range_func('King'))
    print(get_range_func('Pawn'))
