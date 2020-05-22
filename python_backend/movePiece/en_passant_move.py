
from getters.get_sqr_case import get_sqr_case
from getters.get_piece_type import get_piece_type
from misc.step_funcs import step_1sqr0d, step_1sqr180d
from misc.sqr_cases import *
from ranges.specialMoves.SpecialMoves import SpecialMoves
from printers.print_board import print_board


def en_passant_move(board, start, dest, color, special_moves):
    """
    start: start square of pawn capturing by en-passant
    dest: destination square of pawn capturing by en-passant
    color: color of pawn making capture
    x: x coordinate of square either directly left or directly right of start
    y: y coordinate unchanged, same as start. returned with x.
    """
    if not special_moves.is_en_passant((start, dest)):
        return board, 'None'

    x, y = step_1sqr0d(start[0], start[1])  # 0
    if get_sqr_case(board, x, y, color) == ENEMY and get_piece_type(board[x, y]) == 'Pawn':
        captured = board[x, y]
        board[x, y] = '#'
        return board, captured

    x, y = step_1sqr180d(start[0], start[1])  # 180
    if get_sqr_case(board, x, y, color) == ENEMY and get_piece_type(board[x, y]) == 'Pawn':
        captured = board[x, y]
        board[x, y] = '#'
        return board, captured

    print("error: pawn not found")
    return board, 'None'


if __name__ == "__main__":
    # en_passant test 1 (after pawn moves):
    board = \
        {(1, 7): 'BP2', (2, 7): '#', (3, 7): 'BP3', (4, 7): 'BP4', (5, 7): 'BP5', (6, 7): 'BP6', (7, 7): 'BP7',
         (8, 7): 'BP8',
         (1, 8): 'BR1', (2, 8): 'BN2', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): '#',
         (8, 8): 'BR2',
         (1, 6): '#', (2, 6): 'WP8', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'BN1', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): 'BP1', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): 'WP1', (2, 2): 'WP2', (3, 2): '#', (4, 2): 'WP3', (5, 2): 'WP4', (6, 2): 'WP5', (7, 2): 'WP6',
         (8, 2): 'WP7',
         (1, 1): 'WR1', (2, 1): 'WN1', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB2', (7, 1): 'WN2',
         (8, 1): 'WR2'}

    special_moves = SpecialMoves()
    special_moves.en_passant = [((3, 5), (2, 6))]
    print_board(board, heading="before:")
    board, captured = en_passant_move(board, (3, 5), (2, 6), 'W', special_moves)
    print_board(board, heading="after:")
