from custom_except import *
from re import fullmatch


def is_piece(id_):
    """return True if id matches piece id pattern, otherwise return False """
    if fullmatch(r'(W|B)(K|Q|B|N|R|P)[1-9]', id_) is not None:
        return True
    else:
        return False


if __name__ == "__main__":
    for id in ['WP1', 'BB2', '#', 'WQ3', 'WT2', 'WK1', 'B%12', 'BK1', 'WR2', 'WN1']:
        print(is_piece(id))
