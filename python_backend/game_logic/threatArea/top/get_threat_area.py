from game_logic.threatArea.get_path_threats import get_path_threats
from game_logic.threatArea.get_offset_threats import get_offset_threats
from game_logic.threatArea.get_pawn_threats import get_pawn_threats
from game_logic.printers.print_board import print_board
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from game_logic.test_objects.get_standard_piece_defs import get_standard_piece_defs
from game_logic.test_objects.get_standard_id_dict import get_standard_id_dict


def get_threat_area(board, sqr, color, piece_defs, id_dict):
    """ """
    path_threats = get_path_threats(board, sqr, color, piece_defs, id_dict)
    offset_threats = get_offset_threats(board, sqr, color, piece_defs, id_dict)
    pawn_threats = get_pawn_threats(board, sqr, color)
    threat_area = path_threats + offset_threats + pawn_threats
    return threat_area


if __name__ == "__main__":
    piece_defs = get_standard_piece_defs()
    id_dict = get_standard_id_dict()
    # test 1, super_checkmate_impossible_example:
    print('test 1:')
    board = sample_board_dicts['super_checkmate_impossible_example']

    threat_area = get_threat_area(board, (6, 6), 'W', piece_defs, id_dict)
    print_board(board, highlights=threat_area, highlights3=[(6, 6)])
