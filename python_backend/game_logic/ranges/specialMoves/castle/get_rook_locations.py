from game_logic.ranges.specialMoves.castle.rook_locations import rook_locations


def get_rook_locations(king_loc):
    """using king_loc to get starting rook locations"""
    return rook_locations[king_loc]


if __name__ == "__main__":

    print("(5, 1)")
    print(get_rook_locations((5, 1)))
    print("(5, 8)")
    print(get_rook_locations((5, 8)))





