from custom_except import *
from fenParser.getFen import *


def get_pos_str(board):
    """convert the board to a fen positon str and return"""
    pos = get_id_board(board)
    pos = get_piece_fens(pos)
    pos = join_to_rows(pos)
    pos = join_to_fen(pos)
    pos = get_digits(pos)

    return pos


if __name__ == "__main__":
    # test #1, starting fen, rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
    print('test 1:')
    board = \
        {(1, 1): 'WR1', (1, 2): 'WP1', (1, 3): '#', (1, 4): '#', (1, 5): '#', (1, 6): '#', (1, 7): 'BP1', (1, 8): 'BR1',
         (2, 1): 'WN1', (2, 2): 'WP2', (2, 3): '#', (2, 4): '#', (2, 5): '#', (2, 6): '#', (2, 7): 'BP2', (2, 8): 'BN1',
         (3, 1): 'WB1', (3, 2): 'WP3', (3, 3): '#', (3, 4): '#', (3, 5): '#', (3, 6): '#', (3, 7): 'BP3', (3, 8): 'BB1',
         (4, 1): 'WQ1', (4, 2): 'WP4', (4, 3): '#', (4, 4): '#', (4, 5): '#', (4, 6): '#', (4, 7): 'BP4', (4, 8): 'BQ1',
         (5, 1): 'WK1', (5, 2): 'WP5', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): 'BP5', (5, 8): 'BK1',
         (6, 1): 'WB2', (6, 2): 'WP6', (6, 3): '#', (6, 4): '#', (6, 5): '#', (6, 6): '#', (6, 7): 'BP6', (6, 8): 'BB2',
         (7, 1): 'WN2', (7, 2): 'WP7', (7, 3): '#', (7, 4): '#', (7, 5): '#', (7, 6): '#', (7, 7): 'BP7', (7, 8): 'BN2',
         (8, 1): 'WR2', (8, 2): 'WP8', (8, 3): '#', (8, 4): '#', (8, 5): '#', (8, 6): '#', (8, 7): 'BP8', (8, 8): 'BR2'}

    print(get_pos_str(board))
    print('\n')

    # test #2, castle_test3, r3k2r/3q4/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/3Q4/R3K2R w KQkq - 8 13
    print('test 2:')
    board = \
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): 'WN1', (2, 3): 'WB1', (3, 3): 'WQ1', (4, 3): 'BB1', (5, 3): '#', (6, 3): 'BQ1', (7, 3): '#',
         (8, 3): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'BB2', (5, 4): '#', (6, 4): 'WB2', (7, 4): 'BP1', (8, 4): 'WP1',
         (1, 5): 'BP2', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): 'BN1', (6, 5): '#', (7, 5): '#', (8, 5): 'BP3',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WP2', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): 'WP3', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    print(get_pos_str(board))
    print('\n')

    # test #3, castle_test1, r3k2r/1P6/5P2/p3n2p/3b1BpP/NBQb1q2/8/R3K2R
    print('test 3:')
    board = \
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): 'WN1', (2, 3): 'WB1', (3, 3): 'WQ1', (4, 3): 'BB1', (5, 3): '#', (6, 3): 'BQ1', (7, 3): '#',
         (8, 3): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'BB2', (5, 4): '#', (6, 4): 'WB2', (7, 4): 'BP1', (8, 4): 'WP1',
         (1, 5): 'BP2', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): 'BN1', (6, 5): '#', (7, 5): '#', (8, 5): 'BP3',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WP2', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): 'WP3', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    print(get_pos_str(board))
    print('\n')

    # test #4, check_example3, 3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1
    print('test 4:')
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

    print(get_pos_str(board))
    print('\n')

    # test 5, super_checkmate_impossible_example, 5rk1/3np1p1/r4K2/8/7b/8/8/q4r2:
    print('test 5:')
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): 'BR3', (7, 8): 'BK1', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BN1', (5, 7): 'BP1', (6, 7): '#', (7, 7): 'BP2', (8, 7): '#',
         (1, 6): 'BR2', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WK1', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): 'BB1',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): 'BQ1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): 'BR1', (7, 1): '#', (8, 1): '#'}

    print(get_pos_str(board))
    print('\n')

    # test 6, ranges_test,
    print('test 6:')
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'BK1', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BR1', (2, 5): 'BN1', (3, 5): 'BB1', (4, 5): 'BQ1', (5, 5): '#', (6, 5): 'BB2', (7, 5): 'BN2',
         (8, 5): 'BR2',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): 'WR3', (2, 3): 'WN1', (3, 3): 'WB2', (4, 3): 'WQ1', (5, 3): '#', (6, 3): 'WB3', (7, 3): 'WN2',
         (8, 3): 'WR4',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): '#', (2, 1): 'WR1', (3, 1): 'WB1', (4, 1): 'WR2', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): '#'}

    print(get_pos_str(board))
    print('\n')
