
from ranges.range_funcs import range_funcs


def get_range_func(piece_type):
    """return the function that gets the range for piece_type """
    return range_funcs[piece_type]


if __name__ == "__main__":
    print(get_range_func('Rook'))
    print(get_range_func('Knight'))
    print(get_range_func('Bishop'))
    print(get_range_func('Queen'))
    print(get_range_func('King'))
    print(get_range_func('Pawn'))
