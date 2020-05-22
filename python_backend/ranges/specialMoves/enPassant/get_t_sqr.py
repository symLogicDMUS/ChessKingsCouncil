
from ranges.specialMoves.enPassant.en_passants import en_passants

def get_t_sqr(color, align_key):
    """use alignment key to get square that pawn moves to capture by en-passant"""
    return en_passants[color][align_key]

if __name__ == "__main__":
    print(get_t_sqr('B', 'b4a4'))
    print(get_t_sqr('W', 'c5d5'))

