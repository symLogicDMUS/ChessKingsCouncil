from game_logic.ranges.specialMoves.castle.can_king_side_castle import can_king_side_castle
from game_logic.ranges.specialMoves.castle.can_queen_side_castle import can_queen_side_castle
from game_logic.ranges.king.get_king_initial_moves import get_king_initial_moves
from game_logic.ranges.king.get_king_actual_moves import get_king_actual_moves
from game_logic.ranges.specialMoves.castle.get_castle_target_square import get_castle_target_square
from game_logic.ranges.specialMoves.SpecialMoves import SpecialMoves
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.printers.print_board import print_board
from game_logic.test_objects.get_standard_piece_defs import get_standard_piece_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def king(board, sqr, color, json_records, special_moves, piece_defs, id_dict):
    """get the range of king at location sqr on board of given color

    pseudocode
    ---------
    get initial moves
    filter initial moves to get actual moves
    if can_king_side_castle...
        ..get_king_side_castle
    if can_queen_side_castle...
        ..get_queen_side_castle
    """
    k_range = get_king_initial_moves(board, sqr, color)
    if can_king_side_castle(board, color, json_records, piece_defs, id_dict):
        t_sqr = get_castle_target_square(color, 'K')
        k_range.append(t_sqr)
        special_moves.add_castle((sqr, t_sqr))
    if can_queen_side_castle(board, color, json_records, piece_defs, id_dict):
        t_sqr = get_castle_target_square(color, 'Q')
        k_range.append(t_sqr)
        special_moves.add_castle((sqr, t_sqr))
    k_range = get_king_actual_moves(board, sqr, k_range, color, piece_defs, id_dict)
    return k_range, special_moves


if __name__ == "__main__":
    piece_defs = get_standard_piece_defs()
    id_dict = get_standard_id_dict()

    special_moves = SpecialMoves()
    """
    print('test 1, castle_test1  W:')
    board = sample_board_dicts['castle_test1']
    json_records = JsonRecords("../../../../example_games/castle_test1/castle_test1.json", board)
    k_range, special_moves = king(board, (5, 1), 'W', json_records, special_moves, piece_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    print('test 2, castle_test2 W:')
    board = sample_board_dicts['castle_test2']
    json_records = JsonRecords("../../../../example_games/castle_test2/castle_test2.json", board)
    k_range, special_moves = king(board, (5, 1), 'W', json_records, special_moves, piece_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    print('test 3, castle_test3 W:')
    board = sample_board_dicts['castle_test3']
    json_records = JsonRecords("../../../../example_games/castle_test3/castle_test3.json", board)
    k_range, special_moves = king(board, (5, 1), 'W', json_records, special_moves, piece_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    print('test 4, castle_test4 W:')
    board = sample_board_dicts['castle_test4']
    json_records = JsonRecords("../../../../example_games/castle_test4/castle_test4.json", board)
    k_range, special_moves = king(board, (5, 1), 'W', json_records, special_moves, piece_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    print('test 5, castle_test1 B:')
    board = sample_board_dicts['castle_test1']
    json_records = JsonRecords("../../../../example_games/castle_test1/castle_test1.json", board)
    k_range, special_moves = king(board, (5, 8), 'B', json_records, special_moves, piece_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    print('test 6, castle_test2 B:')
    board = sample_board_dicts['castle_test2']
    json_records = JsonRecords("../../../../example_games/castle_test2/castle_test2.json", board)
    k_range, special_moves = king(board, (5, 8), 'B', json_records, special_moves, piece_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    print('test 7, castle_test3  B:')
    board = sample_board_dicts['castle_test3']
    json_records = JsonRecords("../../../../example_games/castle_test3/castle_test3.json", board)
    k_range, special_moves = king(board, (5, 8), 'B', json_records, special_moves, piece_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    print('test 8, castle_test4, B:')
    board = sample_board_dicts['castle_test4']
    json_records = JsonRecords("../../../../example_games/castle_test4/castle_test4.json", board)
    k_range, special_moves = king(board, (5, 8), 'B', json_records, special_moves, piece_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')
    """

    print('test 9, super_checkmate_impossible_example, W:')
    board = sample_board_dicts['super_checkmate_impossible_example']
    json_records = JsonRecords("../../../../example_games/super_checkmate_impossible_example/super_checkmate_impossible_example.json", board)
    k_range, special_moves = king(board, (6, 6), 'W', json_records, special_moves, piece_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')