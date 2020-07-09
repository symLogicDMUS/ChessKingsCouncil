from game_logic.sqr_case.sqr_cases import *
from game_logic.sqr_case.get_sqr_case import get_sqr_case
from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.step_funcs.step_funcs import step_1sqr0d, step_1sqr180d
from game_logic.ranges.specialMoves.SpecialMoves import SpecialMoves
from game_logic.printers.print_board import print_board
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


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
    board = sample_board_dicts["enpassant_test1"]
    special_moves = SpecialMoves()
    special_moves.en_passant = [((3, 5), (2, 6))]
    print_board(board, heading="before:")
    board, captured = en_passant_move(board, (3, 5), (2, 6), 'W', special_moves)
    print_board(board, heading="after:")
