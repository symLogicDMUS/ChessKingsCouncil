from game_logic.piece_type.is_piece import is_piece
from game_logic.color.get_color import get_color


def get_reset_piece_dicts(board, color):
    """create and return dicts for the initial ranges, pins, mt-restrictions and final ranges, of pieces on board"""
    init_ranges = {}
    pins = {}
    mt_restricts = {}
    final_ranges = {}
    for id_ in board.values():
        if not is_piece(id_):
            continue
        if get_color(id_) != color:
            continue
        init_ranges[id_] = []
        pins[id_] = []
        mt_restricts[id_] = []
        final_ranges[id_] = []
    return init_ranges, pins, mt_restricts, final_ranges


if __name__ == "__main__":
    board = \
        {(1, 1): 'BB1', (1, 2): '#', (1, 3): '#', (1, 4): 'BQ3', (1, 5): '#', (1, 6): '#', (1, 7): 'BQ4', (1, 8): '#',
         (2, 1): '#', (2, 2): '#', (2, 3): '#', (2, 4): '#', (2, 5): '#', (2, 6): '#', (2, 7): '#', (2, 8): '#',
         (3, 1): '#', (3, 2): '#', (3, 3): 'WN1', (3, 4): 'WQ1', (3, 5): '#', (3, 6): '#', (3, 7): '#', (3, 8): '#',
         (4, 1): 'BQ1', (4, 2): 'WR1', (4, 3): 'WP1', (4, 4): 'WK1', (4, 5): '#', (4, 6): 'WP2', (4, 7): 'BR2',
         (4, 8): 'BK1',
         (5, 1): '#', (5, 2): '#', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): '#', (5, 8): '#',
         (6, 1): '#', (6, 2): 'WR2', (6, 3): '#', (6, 4): 'WQ2', (6, 5): '#', (6, 6): 'WP3', (6, 7): '#', (6, 8): '#',
         (7, 1): 'BQ2', (7, 2): '#', (7, 3): '#', (7, 4): 'WB1', (7, 5): '#', (7, 6): '#', (7, 7): 'WP4', (7, 8): '#',
         (8, 1): '#', (8, 2): '#', (8, 3): '#', (8, 4): 'BR1', (8, 5): '#', (8, 6): '#', (8, 7): '#', (8, 8): 'BB2'}

    # test 1:
    print('test 1:')
    i_ranges, pins, mt_res, f_ranges = get_reset_piece_dicts(board, 'W')
    print("init_ranges:{}\n\n pins:{}\n\n mt-res:{}\n\n final_ranges:{}\n".format(i_ranges, pins, mt_res, f_ranges))
    print('\n')

    board = \
        {(1, 1): '#', (2, 1): '#', (3, 1): '#', (4, 1): 'BR1', (5, 1): '#', (6, 1): 'WB1', (7, 1): '#', (8, 1): 'WR1',
         (1, 2): '#', (2, 2): 'BN1', (3, 2): 'BB1', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): 'BQ1',
         (1, 4): '#', (2, 4): '#', (3, 4): 'BK1', (4, 4): '#', (5, 4): 'WP1', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): 'BP1', (5, 5): 'WK1', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): 'WN1', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): '#', (2, 8): 'BN2', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    print('test 2:')
    i_ranges, pins, mt_res, f_ranges = get_reset_piece_dicts(board, 'W')
    print("init_ranges:{}\n\n pins:{}\n\n mt-res:{}\n\n final_ranges:{}\n".format(i_ranges, pins, mt_res, f_ranges))
    print('\n')
    i_ranges, pins, mt_res, f_ranges = get_reset_piece_dicts(board, 'B')
    print("init_ranges:{}\n\n pins:{}\n\n mt-res:{}\n\n final_ranges:{}\n".format(i_ranges, pins, mt_res, f_ranges))
    print('\n')

var = {'WB1': [],
       'WR1': [],
       'WP1': [],
       'WK1': [],
       'WN1': [],
       'BR1': [],
       'BN1': [],
       'BB1': [],
       'BQ1': [],
       'BK1': [],
       'BP1': [],
       'BN2': [],
       'BR2': []}
