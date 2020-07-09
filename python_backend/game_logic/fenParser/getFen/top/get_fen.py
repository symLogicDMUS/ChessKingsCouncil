from game_logic.fenParser.getFen.get_id_board import get_id_board
from game_logic.fenParser.getFen.get_piece_fens import get_piece_fens
from game_logic.fenParser.getFen.join_to_rows import join_to_rows
from game_logic.fenParser.getFen.join_to_fen import join_to_fen
from game_logic.fenParser.getFen.get_digits import get_digits
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_fen(board):
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
    board = sample_board_dicts['new']

    print(get_fen(board))
    print('\n')

    # test #2, castle_test3, r3k2r/3q4/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/3Q4/R3K2R w KQkq - 8 13
    print('test 2:')
    board = sample_board_dicts['castle_test3']

    print(get_fen(board))
    print('\n')

    # test #3, castle_test1, r3k2r/1P6/5P2/p3n2p/3b1BpP/NBQb1q2/8/R3K2R
    print('test 3:')
    board = sample_board_dicts['castle_test1']

    print(get_fen(board))
    print('\n')

    # test #4, check_example3, 3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1
    print('test 4:')
    board = sample_board_dicts['check_example3']

    print(get_fen(board))
    print('\n')

    # test 5, super_checkmate_impossible_example, 5rk1/3np1p1/r4K2/8/7b/8/8/q4r2:
    print('test 5:')
    board = sample_board_dicts['super_checkmate_impossible_example']

    print(get_fen(board))
    print('\n')

    # test 6, ranges_test, 8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3 w - - 0 1
    print('test 6:')
    board = sample_board_dicts['ranges_test']

    print(get_fen(board))
    print('\n')
