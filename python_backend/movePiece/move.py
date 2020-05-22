from custom_except import *
from ranges.specialMoves.SpecialMoves import SpecialMoves
from printers.print_board import print_board
from movePiece.ply import ply
from movePiece.castle_move import castle_move
from movePiece.en_passant_move import en_passant_move


def move(board, start, dest, color, special_moves):
    """ function to move a piece on board from start to dest """
    board, captured = ply(board, start, dest)
    board, captured = castle_move(board, start, dest, special_moves)
    board, captured = en_passant_move(board, start, dest, color, special_moves)

    return board, captured


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

    special_moves = SpecialMoves()

    print('test 1:')
    print_board(board, heading="before:")
    board, captured = move(board, (4, 1), (4, 2), 'W', special_moves)
    print_board(board, heading="after:")
    print(board[(4, 2)] == 'BQ1')
    print(board[(4, 1)] == '#')

    print('test 2:')
    print_board(board, heading="before:")
    board, captured = move(board, (1, 1), (3, 3), 'W', special_moves)
    print_board(board, heading="after:")
    print(board[(3, 3)] == 'BB1')
    print(board[(1, 1)] == '#')
    print('\n')

    print('test 2:')
    print_board(board, heading="before:")
    board, captured = move(board, (6, 6), (6, 7), 'W', special_moves)
    print_board(board, heading="after:")
    print(board[(6, 7)] == 'WP3')
    print(board[(6, 6)] == '#')
    print_board(board, heading="before:")
    print('\n')

    print(" ---------- test 1. castle_test3, queen side: ------------ ")

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
    board, captured = move(board, (5, 1), (3, 1), 'W', special_moves)
    print_board(board, heading="before:")
    print_board(board)
    print_board(board, heading="after:")

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
    print_board(board, heading="before:")
    board, captured = move(board, (5, 8), (3, 8), 'B', special_moves)
    print_board(board, heading="after:")

    print("----------- test 2, castle_test3, king side: -----------")
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
    print_board(board, heading="before:")
    board, captured = move(board, (5, 1), (7, 1), 'W', special_moves)
    print_board(board, heading="after:")

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
    print_board(board, heading="before:")
    board, captured = move(board, (5, 8), (7, 8), 'B', special_moves)
    print_board(board, heading="after:")

    print("---------- en-passant test: ----------")
    board = \
        {(1, 8): 'BR1', (2, 8): 'BN2', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): '#',
         (8, 8): 'BR2',
         (1, 7): 'BP2', (2, 7): '#', (3, 7): 'BP3', (4, 7): 'BP4', (5, 7): 'BP5', (6, 7): 'BP6', (7, 7): 'BP7',
         (8, 7): 'BP8',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'BN1', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): 'BP1', (3, 5): 'WP8', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): 'WP1', (2, 2): 'WP2', (3, 2): '#', (4, 2): 'WP3', (5, 2): 'WP4', (6, 2): 'WP5', (7, 2): 'WP6',
         (8, 2): 'WP7',
         (1, 1): 'WR1', (2, 1): 'WN1', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB2', (7, 1): 'WN2',
         (8, 1): 'WR2'}

    special_moves = SpecialMoves()
    special_moves.en_passant = [((3, 5), (2, 6))]
    print_board(board, heading="before:")
    board, ranges_ = move(board, (3, 5), (2, 6), 'W', special_moves)
    print_board(board, heading="after:")
