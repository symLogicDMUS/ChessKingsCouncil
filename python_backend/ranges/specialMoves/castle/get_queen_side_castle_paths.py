from custom_except import *
from ranges.specialMoves.castle.queen_side_castle_paths import queen_side_castle_paths

def get_queen_side_castle_paths(color):
    """use the target square of the castle move to get the squares on castle path"""
    return queen_side_castle_paths[color]

if __name__ == "__main__":

    print('W')
    print(get_queen_side_castle_paths('W'))
    
    print('B')
    print(get_queen_side_castle_paths('B'))
    
