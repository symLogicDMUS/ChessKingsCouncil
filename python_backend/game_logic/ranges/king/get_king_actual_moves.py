from game_logic.threatArea.top.sqr_under_attack import sqr_under_attack
from game_logic.threatArea.get_hypo_boards import get_hypo_boards
from game_logic.test_objects.get_standard_range_defs import get_standard_range_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from game_logic.printers.print_board import print_board


def get_king_actual_moves(board, king_loc, init_range, color, range_defs, id_dict):
    """filter the king's initial moves to get the actual ones"""
    boards = get_hypo_boards(board, king_loc, init_range, color)
    actual_moves = []
    for hypo_k_loc, hypo_board in boards.items():
        if not sqr_under_attack(hypo_board, hypo_k_loc, color, range_defs, id_dict):
            actual_moves.append(hypo_k_loc)
    return actual_moves


if __name__ == "__main__":
    range_defs = get_standard_range_defs()
    id_dict = get_standard_id_dict()

    board = sample_board_dicts['super_checkmate_impossible_example']
    actual_moves = get_king_actual_moves(board, (6, 6), [(5, 5), (6, 5), (7, 5), (5, 6), (7, 6), (5, 7), (6, 7), (7, 7)],
                                         "W", range_defs, id_dict)
    print_board(board, heading="super_checkmate_impossible_example", highlights=actual_moves)
    print('')

    board = sample_board_dicts['king_range_test']
    actual_moves = get_king_actual_moves(board, (4, 3), [(3, 2), (4, 2), (3, 3), (5, 3), (3, 4), (5, 4)],
                                         "W", range_defs, id_dict)
    print_board(board, heading="king_range_test", highlights=actual_moves)
    print('')

