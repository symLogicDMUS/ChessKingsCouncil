
from ranges.specialMoves.SpecialMoves import SpecialMoves
from ranges.specialMoves.castle.get_rook_start_and_dest import get_rook_start_and_dest
from printers.print_board import print_board
from movePiece.ply import ply


def castle_move(board, start, dest, special_moves):
    """if castle move, then move the rook as part of castle
    parameters
    ..........
    start: tuple
    dest: tuple
    special_moves: class specialMoves
    ..........
    note: 1 structure for ranges & pieces. Were seperate in earlier versions
    """
    if not special_moves.is_castle((start, dest)):
        return board, 'None'
    r_start, r_dest = get_rook_start_and_dest(dest)
    board, captured = ply(board, r_start, r_dest)
    return board, captured


if __name__ == "__main__":
    # ? NOTE: only the Rook should move in these tests, not the King. castle_move is for the
    # ? Rook part of the castle

    print("test 1. castle_test3, queen side:")
    # test 1, castle_test3:

    print('COLOR W')
    board = \
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): 'WQ1', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WB1', (5, 3): 'WB2', (6, 3): 'WN2', (7, 3): '#', (8, 3): '#',
         (1, 4): 'WP1', (2, 4): 'WP2', (3, 4): 'WP3', (4, 4): 'WP4', (5, 4): 'WP5', (6, 4): 'WP6', (7, 4): 'WP7',
         (8, 4): 'WP8',
         (1, 5): 'BP1', (2, 5): 'BP2', (3, 5): 'BP3', (4, 5): 'BP4', (5, 5): 'BP5', (6, 5): 'BP6', (7, 5): 'BP7',
         (8, 5): 'BP8',
         (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN2', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BQ1', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    special_moves = SpecialMoves()
    special_moves.castles = [((5, 1), (7, 1)), ((5, 1), (3, 1))]
    board, ranges = castle_move(board, (5, 1), (3, 1), special_moves)
    print_board(board)

    print('COLOR B')
    board = \
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): 'WQ1', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WB1', (5, 3): 'WB2', (6, 3): 'WN2', (7, 3): '#', (8, 3): '#',
         (1, 4): 'WP1', (2, 4): 'WP2', (3, 4): 'WP3', (4, 4): 'WP4', (5, 4): 'WP5', (6, 4): 'WP6', (7, 4): 'WP7',
         (8, 4): 'WP8',
         (1, 5): 'BP1', (2, 5): 'BP2', (3, 5): 'BP3', (4, 5): 'BP4', (5, 5): 'BP5', (6, 5): 'BP6', (7, 5): 'BP7',
         (8, 5): 'BP8',
         (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN2', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BQ1', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    special_moves = SpecialMoves()
    special_moves.castles = [((5, 8), (7, 8)), ((5, 8), (3, 8))]
    board, ranges = castle_move(board, (5, 8), (3, 8), special_moves)
    print_board(board)

    print("test 2, castle_test3, king side:")
    # test 2, castle_test3:

    print('COLOR W')
    board = \
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): 'WQ1', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WB1', (5, 3): 'WB2', (6, 3): 'WN2', (7, 3): '#', (8, 3): '#',
         (1, 4): 'WP1', (2, 4): 'WP2', (3, 4): 'WP3', (4, 4): 'WP4', (5, 4): 'WP5', (6, 4): 'WP6', (7, 4): 'WP7',
         (8, 4): 'WP8',
         (1, 5): 'BP1', (2, 5): 'BP2', (3, 5): 'BP3', (4, 5): 'BP4', (5, 5): 'BP5', (6, 5): 'BP6', (7, 5): 'BP7',
         (8, 5): 'BP8',
         (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN2', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BQ1', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    special_moves = SpecialMoves()
    special_moves.castles = [((5, 1), (7, 1)), ((5, 1), (3, 1))]
    board, ranges = castle_move(board, (5, 1), (7, 1), special_moves)
    print_board(board)

    print('COLOR B')
    board = \
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): 'WQ1', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WB1', (5, 3): 'WB2', (6, 3): 'WN2', (7, 3): '#', (8, 3): '#',
         (1, 4): 'WP1', (2, 4): 'WP2', (3, 4): 'WP3', (4, 4): 'WP4', (5, 4): 'WP5', (6, 4): 'WP6', (7, 4): 'WP7',
         (8, 4): 'WP8',
         (1, 5): 'BP1', (2, 5): 'BP2', (3, 5): 'BP3', (4, 5): 'BP4', (5, 5): 'BP5', (6, 5): 'BP6', (7, 5): 'BP7',
         (8, 5): 'BP8',
         (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN2', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BQ1', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    special_moves = SpecialMoves()
    special_moves.castles = [((5, 8), (7, 8)), ((5, 8), (3, 8))]
    board, ranges = castle_move(board, (5, 8), (7, 8), special_moves)
    print_board(board)
