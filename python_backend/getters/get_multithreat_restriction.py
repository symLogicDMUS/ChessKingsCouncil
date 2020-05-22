
from getters.get_num_pieces_checking_king import get_num_pieces_checking_king
from getters.get_color import get_color
from getters.get_piece_type import get_piece_type
from getters.get_pathdata_dict import get_pathdata_dict
from pprint import pprint


def get_multithreat_restriction(board, num_pieces_checking_king, color):
    """
    if there is more than 1 piece checking the king then each piece of color will be restricted to the square it's
    currently on, otherwise no multi-threat restriction so each piece gets all 64 coordinates
    """
    multithreat_restriction = {}
    if num_pieces_checking_king > 1:
        for sqr, id_ in board.items():
            if id_ == '#':
                continue
            if get_color(id_) != color:
                continue
            if get_piece_type(id_) == 'King':
                continue
            multithreat_restriction[id_] = sqr
    else:
        for sqr, id_ in board.items():
            if id_ == '#':
                continue
            if get_color(id_) != color:
                continue
            if get_piece_type(id_) == 'King':
                continue
            multithreat_restriction[id_] = []

    return multithreat_restriction


if __name__ == "__main__":
    # test 1, check_example3, 3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1 w - - 0 1:
    print('test 1:')
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): 'BK1', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): 'BB2',
         (1, 7): 'BQ4', (2, 7): '#', (3, 7): '#', (4, 7): 'BR2', (5, 7): '#', (6, 7): '#', (7, 7): 'WP4', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'WP2', (5, 6): '#', (6, 6): 'WP3', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 4): 'BQ3', (2, 4): '#', (3, 4): 'WQ1', (4, 4): 'WK1', (5, 4): '#', (6, 4): 'WQ2', (7, 4): 'WB1',
         (8, 4): 'BR1',
         (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WP1', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): 'WR1', (5, 2): '#', (6, 2): 'WR2', (7, 2): '#', (8, 2): '#',
         (1, 1): 'BB1', (2, 1): '#', (3, 1): '#', (4, 1): 'BQ1', (5, 1): '#', (6, 1): '#', (7, 1): 'BQ2', (8, 1): '#'}

    pd_dict = get_pathdata_dict((6, 6), board, 'W')
    npck = get_num_pieces_checking_king((6, 6), board, 'W', pd_dict)
    multithreat_restriction = get_multithreat_restriction(board, npck, 'W')
    print("number of pieces checking king:", npck)
    pprint(multithreat_restriction)
