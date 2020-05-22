from custom_except import *
from coordType import *

def get_en_passant_alignment_key(sqr1, sqr2):
    """ takes 2 (x,y) coordinates as input, and returns their rankfiles concatinated"""
    rf1 = to_rankfile(sqr1)
    rf2 = to_rankfile(sqr2)
    return rf1 + rf2

if __name__ == "__main__":
    pass #TODO: implement test
