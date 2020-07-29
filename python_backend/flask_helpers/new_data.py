from game_logic.ranges.top.get_ranges import get_ranges
from game_logic.pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from game_logic.getters.get_reset_piece_dicts import get_reset_piece_dicts
from game_logic.threatArea.get_king_locs import get_king_locs
from game_logic.threatArea.top.get_threat_area import get_threat_area
from game_logic.restriction.get_num_pieces_checking_king import get_num_pieces_checking_king
from game_logic.restriction.get_multithreat_restriction import get_multithreat_restriction
from game_logic.ranges.top.get_final_ranges import get_final_ranges
from game_logic.coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from game_logic.pins.top.get_pins import get_pins
from game_logic.GameStatus.get_status import get_status
from game_logic.color.get_next_color import get_next_color as get_enemy_color
from game_logic.status.is_checkmate import is_checkmate as checkmate
from flask_helpers.ai_move import ai_move
from game_logic.status.g_status_types import *


def new_data(board, color, ai_color, defs_, json_records):
    """ """
    init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
    init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records, defs_)
    k_loc = get_king_locs(board, color)
    threat_area = get_threat_area(board, k_loc, color, defs_["range_defs"], defs_["id_dict"])
    pd_dict = get_pathdata_dict(board, k_loc, color, defs_["range_defs"], defs_["id_dict"])
    pins = get_pins(pd_dict, pins)
    npck = get_num_pieces_checking_king(board, k_loc, color, defs_["range_defs"], defs_["id_dict"], pd_dict)
    mt_restricts = get_multithreat_restriction(board, npck, color)
    final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts)
    special_moves.set_promos(board, final_ranges, color)
    data = {'status': get_status(board, final_ranges, get_enemy_color(color), npck)}
    if color == ai_color and not checkmate(final_ranges):
        ai_capture, ai_start, ai_dest = ai_move(board, final_ranges, ai_color, special_moves)
    else:
        ai_capture, ai_start, ai_dest = False, False, False
    data.update(map_xy_to_rf({"ranges": final_ranges,
                              "moves": special_moves.get_moves(),
                              "ai_start": ai_start,
                              "ai_dest": ai_dest,
                              "ai_capture": ai_capture}))
    return data
