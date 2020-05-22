
from ranges.specialMoves.castle.rook_start_and_dest import rook_start_and_dest

#LEFT OFF HERE
#TODO: implement function to get the starting and ending location of a 
def get_rook_start_and_dest(king_pos):
    """get the start and dest of a particular rook during a castle"""
    r_start, r_dest = rook_start_and_dest[king_pos]
    return r_start, r_dest 

if __name__ == "__main__":

    print(get_rook_start_and_dest((3, 1)))
    print(get_rook_start_and_dest((7, 1)))
    print(get_rook_start_and_dest((3, 8)))
    print(get_rook_start_and_dest((7, 8)))