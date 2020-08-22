from game_logic.test_objects.get_standard_piece_defs import get_standard_piece_defs


def get_range_instance(range_defs, piece_name, color, range_type):
    """get range of range_type of the piece named piece_name of enemy color"""
    return range_defs[piece_name][color][range_type]


if __name__ == "__main__":
    range_defs = get_standard_piece_defs()
    print(get_range_instance(range_defs, "Rook", "W", "spans"))
    print(get_range_instance(range_defs, "Rook", "W", "offsets"))
    print(get_range_instance(range_defs, "Queen", "B", "spans"))
    print(get_range_instance(range_defs, "Queen", "B", "offsets"))
