
from ranges.specialMoves.enPassant.en_passant_white_attack_rank import en_passant_white_attack_rank

def is_enp_white_att_r(sqr):
    """return true if sqr is in the en-passant white attack rank, else false"""
    if sqr in en_passant_white_attack_rank:
        return True
    else:
        return False

if __name__ == "__main__":
    print(is_enp_white_att_r((1, 4)) == False)
    print(is_enp_white_att_r((1, 5)) == True)