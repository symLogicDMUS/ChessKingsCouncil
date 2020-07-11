from game_logic.ranges.specialMoves.SpecialMoves import SpecialMoves
from game_logic.ranges.specialMoves.castle.get_rook_start_and_dest import get_rook_start_and_dest
from game_logic.printers.print_board import print_board
from game_logic.movePiece.ply import ply
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


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
    # ? NOTE: only the Rook should move in these helpers, not the King. castle_move is for the
    # ? Rook part of the castle

    print("test 1. castle_test3, queen side:")
    # test 1, castle_test3:

    print('COLOR W')
    board = sample_board_dicts['castle_test3']
    special_moves = SpecialMoves()
    special_moves.castles = [((5, 1), (7, 1)), ((5, 1), (3, 1))]
    board, ranges = castle_move(board, (5, 1), (3, 1), special_moves)
    print_board(board)

    print('COLOR B')
    board = sample_board_dicts['castle_test3']
    special_moves = SpecialMoves()
    special_moves.castles = [((5, 8), (7, 8)), ((5, 8), (3, 8))]
    board, ranges = castle_move(board, (5, 8), (3, 8), special_moves)
    print_board(board)

    print("test 2, castle_test3, king side:")
    # test 2, castle_test3:

    print('COLOR W')
    board = sample_board_dicts['castle_test3']
    special_moves = SpecialMoves()
    special_moves.castles = [((5, 1), (7, 1)), ((5, 1), (3, 1))]
    board, ranges = castle_move(board, (5, 1), (7, 1), special_moves)
    print_board(board)

    print('COLOR B')
    board = sample_board_dicts['castle_test3']

    special_moves = SpecialMoves()
    special_moves.castles = [((5, 8), (7, 8)), ((5, 8), (3, 8))]
    board, ranges = castle_move(board, (5, 8), (7, 8), special_moves)
    print_board(board)
