from custom_except import *

def get_piece_fen(id):
    """getFen TASK 2.1, take the game id of a piece and convert it a fen id"""
    if id[0] == 'B':
        return id[1].lower()
    elif id[0] == 'W':
        return id[1]
    else:
        print('error occured  with game id or piece')
        return -1


if __name__ == "__main__":

    # white:
    print(get_piece_fen('WB2'))
    print(get_piece_fen('WQ1'))
    print(get_piece_fen('WK1'))
    print(get_piece_fen('WN1'))
    print(get_piece_fen('WR2'))
    print(get_piece_fen('WP3'))

    # black:
    print(get_piece_fen('BB2'))
    print(get_piece_fen('BQ1'))
    print(get_piece_fen('BK1'))
    print(get_piece_fen('BN1'))
    print(get_piece_fen('BR2'))
    print(get_piece_fen('BP3'))

