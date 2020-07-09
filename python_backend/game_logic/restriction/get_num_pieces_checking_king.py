from game_logic.threatArea.get_offset_threats import get_offset_threats
from game_logic.threatArea.get_pawn_threats import get_pawn_threats
from game_logic.pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from game_logic.pathsInfo.top.get_num_path_attackers import get_num_path_attackers
from game_logic.test_objects.get_standard_range_defs import get_standard_range_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from game_logic.printers.print_board import print_board


def get_num_pieces_checking_king(board, sqr, color, range_defs, id_dict, pd_dict):
    """get the number of pieces checking the king of current turn"""
    offset_threats = get_offset_threats(board, sqr, color, range_defs, id_dict)
    pawn_threats = get_pawn_threats(board, sqr, color)
    num_path_attackers = get_num_path_attackers(pd_dict)
    return len(offset_threats) + len(pawn_threats) + num_path_attackers


if __name__ == "__main__":

    range_defs = get_standard_range_defs()
    id_dict = get_standard_id_dict()

    print('test #1, check_example3, 3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1')
    board = sample_board_dicts['check_example3']
    pd_dict = get_pathdata_dict(board, (4, 4), 'W', range_defs, id_dict)
    print(get_num_pieces_checking_king(board, (4, 4), 'W', range_defs, id_dict, pd_dict))
    print_board(board)
    print('\n')

    print('test 5, super_checkmate_impossible_example, 5rk1/3np1p1/r4K2/8/7b/8/8/q4r2:')
    board = sample_board_dicts['super_checkmate_impossible_example']
    pd_dict = get_pathdata_dict(board, (6, 6), 'W', range_defs, id_dict)
    print(get_num_pieces_checking_king(board, (6, 6), 'W', range_defs, id_dict, pd_dict))
    print_board(board)
    print('\n')
