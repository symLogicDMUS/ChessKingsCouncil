from game_logic.ranges.specialMoves.castle.king_side_castle_paths import king_side_castle_paths


def get_king_side_castle_paths(color):
    """use the target square of the castle move to get the squares on castle path"""
    return king_side_castle_paths[color]


if __name__ == "__main__":

    print('W')
    print(get_king_side_castle_paths('W'))
    
    print('B')
    print(get_king_side_castle_paths('B'))

