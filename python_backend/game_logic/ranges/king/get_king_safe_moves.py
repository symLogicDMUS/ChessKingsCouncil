from game_logic.threatArea.top.sqr_under_attack import sqr_under_attack
from game_logic.test_objects.get_standard_range_defs import get_standard_range_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from game_logic.test_objects.sample_board_dicts import sample_board_dicts


def get_king_safe_moves(board, move_list, color, range_defs, id_dict):
    """get the squares that king can move from the moves list, that do not put it in check"""
    return list(filter(lambda sqr: sqr_under_attack(board, sqr, color, range_defs, id_dict) == False, move_list))


if __name__ == "__main__":

    id_dict = get_standard_id_dict()
    range_defs = get_standard_range_defs()

    # king_range_test, 4k3/6pp/8/8/3Pp3/2bK4/4B3/8 w - - 0 1
    board = sample_board_dicts['king_range_test']
    get_king_safe_moves(board, [(4, 1), (6, 1), (4, 2), (5, 2), (6, 2)], 'W', range_defs, id_dict)