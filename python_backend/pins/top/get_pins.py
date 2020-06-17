from pins.is_pin import is_pin
from pins.get_pin import _get_pin_info
from pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from pprint import pprint
from printers.get_unicode_board import get_unicode_board
from printers.print_sqr_highlights import print_sqr_highlights
from piece_type.get_piece_type import get_piece_type


def get_pins(sqr, board, color, pd_dict, pins):
    """get dict, key = piece_id, value = coord_list
       piece_id: a pinned piece 
       coord_list: path the piece is pinned to.
    """
    for path in pd_dict.values():
        if is_pin(path):
            piece_id, coord_path = _get_pin_info(path)
            if get_piece_type(piece_id) == 'King':
                continue
            pins[piece_id] = coord_path
    return pins


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

    pins = \
        {'WB1': [],
         'WK1': [],
         'WN1': [],
         'WP1': [],
         'WP2': [],
         'WP3': [],
         'WP4': [],
         'WQ1': [],
         'WQ2': [],
         'WR1': [],
         'WR2': []}

    print('test 1:')
    pd_dict = get_pathdata_dict((4, 4), board, 'W')
    for pd in pd_dict.values():
        print(pd)
    pins = get_pins((4, 4), board, 'W', pd_dict, pins)
    pprint(pins)
    uni_board = get_unicode_board(board)
    for piece_id, coord_path in pins.items():
        pinned_id = list(filter(lambda sqr: board[sqr] == piece_id, coord_path))
        if coord_path:
            print_sqr_highlights(uni_board, coord_path, 'red', sqrs_=pinned_id)
