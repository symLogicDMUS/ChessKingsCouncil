from custom_except import *
from re import fullmatch


def get_piece_type(id_):
    """return 'Rook', 'Knight', 'Bishop', 'King', 'Queen', or 'Pawn'"""

    if id_ == '#':
        return 'Empty'
    if fullmatch(r'(W|B)R[1-9]', id_) is not None:
        return 'Rook'
    if fullmatch(r'(W|B)N[1-9]', id_) is not None:
        return 'Knight'
    if fullmatch(r'(W|B)B[1-9]', id_) is not None:
        return 'Bishop'
    if fullmatch(r'(W|B)Q[1-9]', id_) is not None:
        return 'Queen'
    if fullmatch(r'(W|B)K[1-9]', id_) is not None:
        return 'King'
    if fullmatch(r'(W|B)P[1-9]', id_) is not None:
        return 'Pawn'
    else:
        print('error: not a piece id')
        return -1


if __name__ == "__main__":

    for id in ['WP1', 'BB2', 'WQ3', 'WK1', 'BK1', 'WR2', 'WN1']:
        type_ = get_piece_type(id)
        print("id:{}, type:{}\n".format(id, type_))
