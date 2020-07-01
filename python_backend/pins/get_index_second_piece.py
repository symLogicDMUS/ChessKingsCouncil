from printers.print_sqr_highlights import print_sqr_highlights
from printers.get_unicode_board import get_unicode_board


def _get_index_attacking_piece(piece_ids, all_ids):
    """get the second piece id and then get its location in the list of all assign_ids"""
    try:
        piece_id = piece_ids[1]
        i = all_ids.index(piece_id)
    except IndexError:
        print('error: there was not 2 pieces on path')
        i = None
    except ValueError:
        print('error: piece id was not in list')
        i = None
    finally:
        return i


if __name__ == '__main__':
    #  check_example3:
    board = \
        {(1, 1): 'BB1', (2, 1): '#', (3, 1): '#', (4, 1): 'BQ1', (5, 1): '#', (6, 1): '#', (7, 1): 'BQ2', (8, 1): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): 'WR1', (5, 2): '#', (6, 2): 'WR2', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WP1', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 4): 'BQ3', (2, 4): '#', (3, 4): 'WQ1', (4, 4): 'WK1', (5, 4): '#', (6, 4): 'WQ2', (7, 4): 'WB1',
         (8, 4): 'BR1',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'WP2', (5, 6): '#', (6, 6): 'WP3', (7, 6): '#', (8, 6): '#',
         (1, 7): 'BQ4', (2, 7): '#', (3, 7): '#', (4, 7): 'BR2', (5, 7): '#', (6, 7): '#', (7, 7): 'WP4', (8, 7): '#',
         (1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): 'BK1', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): 'BB2'}

    uni_board = get_unicode_board(board)

    piece_ids = ['WP2', 'BR2', 'BK1']
    all_ids = ['#', 'WP2', 'BR2', 'BK1']
    i = _get_index_attacking_piece(piece_ids, all_ids)
    id_ = all_ids[i]
    sqr_l = list(filter(lambda sqr: board[sqr] == id_,  board.keys()))
    print_sqr_highlights(uni_board, sqr_l, 'red')

    piece_ids = ['WP3', 'WP4', 'BB2']
    all_ids = ['#', 'WP3', 'WP4', 'BB2']
    i = _get_index_attacking_piece(piece_ids, all_ids)
    id_ = all_ids[i]
    sqr_l = list(filter(lambda sqr: board[sqr] == id_,  board.keys()))
    print_sqr_highlights(uni_board, sqr_l, 'red')

    piece_ids = ['WQ2', 'WB1', 'BR1']
    all_ids = ['#', 'WQ2', 'WB1', 'BR1']
    i = _get_index_attacking_piece(piece_ids, all_ids)
    id_ = all_ids[i]
    sqr_l = list(filter(lambda sqr: board[sqr] == id_,  board.keys()))
    print_sqr_highlights(uni_board, sqr_l, 'red')

    piece_ids = ['WR2', 'BQ2']
    all_ids = ['#', 'WR2', 'BQ2']
    i = _get_index_attacking_piece(piece_ids, all_ids)
    id_ = all_ids[i]
    sqr_l = list(filter(lambda sqr: board[sqr] == id_,  board.keys()))
    print_sqr_highlights(uni_board, sqr_l, 'red')

    piece_ids = ['WP1', 'WR1', 'BQ1']
    all_ids = ['WP1', 'WR1', 'BQ1']
    i = _get_index_attacking_piece(piece_ids, all_ids)
    id_ = all_ids[i]
    sqr_l = list(filter(lambda sqr: board[sqr] == id_,  board.keys()))
    print_sqr_highlights(uni_board, sqr_l, 'red')

    piece_ids = ['WN1', 'BB1']
    all_ids = ['WN1', '#', 'BB1']
    i = _get_index_attacking_piece(piece_ids, all_ids)
    id_ = all_ids[i]
    sqr_l = list(filter(lambda sqr: board[sqr] == id_,  board.keys()))
    print_sqr_highlights(uni_board, sqr_l, 'red')

    piece_ids = ['WQ1', 'BQ3']
    all_ids = ['WQ1', '#', 'BQ3']
    i = _get_index_attacking_piece(piece_ids, all_ids)
    id_ = all_ids[i]
    sqr_l = list(filter(lambda sqr: board[sqr] == id_,  board.keys()))
    print_sqr_highlights(uni_board, sqr_l, 'red')

