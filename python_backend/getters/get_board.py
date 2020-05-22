from custom_except import *
from fenParser.getBoard import *
from misc.save_bd import save_bd


def get_board(fen):
    """takes a fen string as input, and returns a board dict """
    str_ = get_pos_str(fen)
    str_ = get_trav_str(str_)
    str_ = num_to_sharps(str_)
    list_ = pos_str_to_list(str_)
    list_ = convert_ids(list_)
    list_ = add_digit_to_id(list_)
    board = init_board()
    board = setup_board(board, list_)

    return board


if __name__ == "__main__":
    # test 1
    print('test 1:')
    board = get_board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    print(board ==\
          {(1, 1): 'WR1', (1, 2): 'WP1', (1, 3): '#', (1, 4): '#', (1, 5): '#', (1, 6): '#', (1, 7): 'BP1', (1, 8): 'BR1',
           (2, 1): 'WN1', (2, 2): 'WP2', (2, 3): '#', (2, 4): '#', (2, 5): '#', (2, 6): '#', (2, 7): 'BP2', (2, 8): 'BN1',
           (3, 1): 'WB1', (3, 2): 'WP3', (3, 3): '#', (3, 4): '#', (3, 5): '#', (3, 6): '#', (3, 7): 'BP3', (3, 8): 'BB1',
           (4, 1): 'WQ1', (4, 2): 'WP4', (4, 3): '#', (4, 4): '#', (4, 5): '#', (4, 6): '#', (4, 7): 'BP4', (4, 8): 'BQ1',
           (5, 1): 'WK1', (5, 2): 'WP5', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): 'BP5', (5, 8): 'BK1',
           (6, 1): 'WB2', (6, 2): 'WP6', (6, 3): '#', (6, 4): '#', (6, 5): '#', (6, 6): '#', (6, 7): 'BP6', (6, 8): 'BB2',
           (7, 1): 'WN2', (7, 2): 'WP7', (7, 3): '#', (7, 4): '#', (7, 5): '#', (7, 6): '#', (7, 7): 'BP7', (7, 8): 'BN2',
           (8, 1): 'WR2', (8, 2): 'WP8', (8, 3): '#', (8, 4): '#', (8, 5): '#', (8, 6): '#', (8, 7): 'BP8', (8, 8): 'BR2'})
    print('\n')
    save_bd(board)

    # test 2, ranges_test:
    print('test 2:')
    board = get_board('8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3 w - - 0 1')
    print(board)
    print("\n")

    # test 3, check_example3:
    print('test 3:')
    board = get_board('3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1 w - - 0 1')
    print(board)
    print("\n")

    # test 4, knight_threat1:
    print('test 4:')
    board = get_board('r4rk1/1pp1qppp/3bbn2/pP1pp3/4P3/2NBBN2/P1n1QPPP/R3K2R w KQ a6 0 10')
    print(board)
    print('\n')

    # test 5, pawn_threat1:
    print('test 5:')
    board = get_board('rnbq1bnr/8/8/2k5/1P4p1/5K2/8/RNBQ1BNR w - - 0 1')
    print(board)
    print('\n')

    # test 6:
    print('test 6:')
    board = get_board('5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1')
    print(board)
    print('\n')

    # test 7, middle_cluster:
    print('test 7:')
    board = get_board('8/8/3Qq3/2RbBr2/3Nn3/3kK3/8/8 w - - 0 1')
    print(board)
    print('\n')

    # test 8:
    print('test 8:')
    board = get_board('8/8/8/3k4/5KkK/2k4K/5pKK/8 w - - 0 1')
    print(board)
    print('\n')

    # test 9:
    print('test 9:')
    board = get_board('r3k2r/2P5/5P2/p3n2p/3b1BpP/NBQb1q2/8/R3K2R w KQkq - 1 25')
    print(board)
    print('\n')

    # test 10, castle_test1:
    print('test 10, castle_test1:')
    board = get_board('r3k2r/1P6/5P2/p3n2p/3b1BpP/NBQb1q2/8/R3K2R w KQkq - 1 25')
    print(board)
    print('\n')

    # test 11, castle_test2:
    print('test 11, castle_test2:')
    board = get_board('1q2k3/8/8/8/8/8/8/R3K2R w K - 0 1')
    print(board)
    print('\n')

    # test 12, castle_test3:
    print('test 12, castle_test3:')
    board = get_board('r3k2r/3q4/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/3Q4/R3K2R w KQkq - 8 13')
    print(board)
    print('\n')

    # test 13, castle_test4:
    print('test 13, castle_test4:')
    board = get_board('r2qk2r/8/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/8/R2QK2R w KQkq - 8 13')
    print(board)
    print('\n')

    # test 14:
    print('test 14:')
    board = get_board('r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1')
    print(board)
    print('\n')

    # test 15, pawn_range:
    print('test 15, pawn_range')
    board = get_board('r1bqkbnr/p1p2pp1/1p6/n2pp1Pp/1PP1P3/N7/P2P1P1P/R1BQKBNR w KQkq h6 0 7')
    print(board)
    print('\n')

    # test 16, en_passant test 1:
    print('test 16, en_passant test 1:')
    board = get_board('rnbqkb1r/p1pppppp/5n2/1pP5/8/8/PP1PPPPP/RNBQKBNR w KQkq b6 0 3')
    print(board)
    print('\n')

    # test 17, king_range_test:
    print('test 17, king_range_test:')
    board = get_board('4k3/6pp/8/8/3Pp3/2bK4/4B3/8 w - - 0 1')
    print(board)
    print('\n')

    # test 18, check_example_3
    print('test 18, check_example_3')
    board = get_board('3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1 w - - 0 1')
    print(board)
    print('\n')

    # test 19, pawn_promo
    print('test 19, pawn promo')
    board = get_board('r1bqkbnr/1P1p2p1/2n5/4pp1p/P3P1P1/N3B3/2p2P1P/R2QKBNR b KQkq - 1 11')
    print(board)
    print('\n')

    # test 20, super_checkmate_impossible_example
    print('test 20, super_checkmate_impossible_example')
    board = get_board('5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1')
    print(board)
    print('\n')
