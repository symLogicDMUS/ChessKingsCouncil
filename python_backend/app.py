from flask import Flask, jsonify, request
from getters.get_data import get_data
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
from JsonRecords.JsonRecords import JsonRecords
from convert_dict_lists import convert_dict_lists
import traceback
import json
import sys
import os

app = Flask(__name__)

""" The javaScript equivalent of the following code is now implemented on the React end. it can be found in main.terminal.play:
start, dest, board, captured, x = make_move(board, start, dest, color, final_ranges, special_moves)
board, p_flag, = promote(board, start, dest, color, default=True)
json_records.update_hist(board[dest], start, dest, p_flag)
fen_obj.update_state(special_moves, json_records, start, dest, captured, color)
json_records, x = fifty_move_draw(fen_obj.hm_clock, json_records, default=True)
print_board(board, heading=colored(json_records.condition))
color = get_next_color(color)
"""


@app.route('/start', methods=['POST'])
def start():
    """get data from game_name"""
    game_name = request.get_data(as_text=True)
    fen_obj, board, json_records = get_data(game_name, './python_backend')
    color = fen_obj.turn.upper()
    json_records = JsonRecords(None, None)
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
    fen_data = fen_obj.get_data()
    final_ranges = convert_dict_lists(final_ranges)
    moves = special_moves.get_moves()
    return jsonify({"fen_data": fen_data, "board": board, "records": json_records, "ranges":final_ranges, "moves":moves})


@app.route('/update', methods=['POST'])
def update():
    """update the ranges of pieces and the state of the game and return to React """
    data = request.get_json()
    board, records, color = data['board'], data['records'], data['color']
    json_records = JsonRecords(None, None, j_records=records)
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
    final_ranges = convert_dict_lists(final_ranges)
    moves = special_moves.get_moves()
    jsonify({"color": color, "ranges": final_ranges, "records": records, "moves": moves})


if __name__ == "__main__":
    pass
