from game_logic.restriction.get_num_pieces_checking_king import get_num_pieces_checking_king
from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from game_logic.test_objects.get_standard_range_defs import get_standard_range_defs
from game_logic.color.get_color import get_color
from pprint import pprint


def get_multithreat_restriction(board, num_pieces_checking_king, color):
    """
    if there is more than 1 piece checking the king then each piece of color will be restricted to the square it's
    currently on, otherwise no multi-threat restriction so each piece gets all 64 coordinates
    """
    multithreat_restriction = {}
    if num_pieces_checking_king > 1:
        for sqr, id_ in board.items():
            if id_ == '#':
                continue
            if get_color(id_) != color:
                continue
            if get_piece_type(id_) == 'K':
                continue
            multithreat_restriction[id_] = sqr
    else:
        for sqr, id_ in board.items():
            if id_ == '#':
                continue
            if get_color(id_) != color:
                continue
            if get_piece_type(id_) == 'K':
                continue
            multithreat_restriction[id_] = []

    return multithreat_restriction


if __name__ == "__main__":
    print('check_example3, 3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1 w - - 0 1:')
    range_defs = get_standard_range_defs()
    id_dict = get_standard_id_dict()
    board = sample_board_dicts['check_example3']
    pd_dict = get_pathdata_dict(board, (6, 6), 'W', range_defs, id_dict)
    npck = get_num_pieces_checking_king(board, (6, 6), 'W', range_defs, id_dict, pd_dict)
    multithreat_restriction = get_multithreat_restriction(board, npck, 'W')
    print("number of pieces checking king:", npck)
    pprint(multithreat_restriction)
