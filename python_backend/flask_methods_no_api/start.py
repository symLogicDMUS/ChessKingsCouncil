from custom_except import *
from flask import jsonify
from print_args import print_args
from get_data import get_data
from getters.get_pathdata_dict import get_pathdata_dict
from getters.get_next_color import get_next_color
from getters.get_ranges import get_ranges
from getters.get_piece_dicts import get_piece_dicts
from getters.get_king_locs import get_king_locs
from getters.get_threat_area import get_threat_area
from getters.get_num_pieces_checking_king import get_num_pieces_checking_king
from getters.get_pins import get_pins
from getters.get_multithreat_restriction import get_multithreat_restriction
from getters.get_final_ranges import get_final_ranges
from coordType.json_keys_to_rf import json_keys_to_rf


def start(game_name):
    """replicate behavior without api call"""
    print("POST request, start()")
    fen_obj, board, json_records = get_data(game_name)
    color = fen_obj.turn.upper()
    init_ranges, pins, mt_restricts, final_ranges = get_piece_dicts(board, color)
    init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records)
    k_loc = get_king_locs(board, color)
    threat_area = get_threat_area(k_loc, board, color)
    pd_dict = get_pathdata_dict(k_loc, board, color)
    pins = get_pins(k_loc, board, color, pd_dict, pins)
    npck = get_num_pieces_checking_king(k_loc, board, color, pd_dict)
    mt_restricts = get_multithreat_restriction(board, npck, color)
    final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts, color)
    json_records.update_state(board, final_ranges, get_next_color(color), npck)
    records = json_records.get_records()
    moves = special_moves.get_moves()
    fen_data = fen_obj.get_data()
    data = json_keys_to_rf({"color": color, "fen_data": fen_data, "board": board, "records": records, "ranges": final_ranges,
                    "moves": moves})
    return data


if __name__ == "__main__":
    print_args(start("New"))
