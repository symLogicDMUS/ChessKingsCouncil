from custom_except import *
from ranges.specialMoves.castle.castle_target_squares import castle_target_squares


def get_castle_target_square(color, side):
    """get the target square of the castle for the given color king and on given side of king"""
    return castle_target_squares[color][side]

if __name__ == "__main__":
    print(get_castle_target_square('W', 'Q'))    
    print(get_castle_target_square('W', 'K'))    
    print(get_castle_target_square('B', 'Q'))    
    print(get_castle_target_square('B', 'K'))