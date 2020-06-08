from printers.print_args import print_args
from flask import Flask, jsonify, request
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
from JsonRecords.JsonRecords import JsonRecords
from coordType.xy.map_rf_to_xy import map_rf_to_xy
from coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from z_flask.parse_data import parse_data
from pprint import pprint
import json
import os

app = Flask(__name__)


@app.route('/simple', methods=['GET', 'POST'])
def simple():
    """ """
    print('in the SIMPLE method')
    data = request.get_data(as_text=True)
    data = json.loads(data)
    pprint(data)
    return "Done", 201


@app.route('/standard', methods=['POST'])
def standard():
    """update the ranges of pieces and the state of the game and return to React """
    print("POST request, update()""")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    data = map_rf_to_xy(data)
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
    special_moves.set_promos(board, final_ranges, color)
    moves = special_moves.get_moves()
    data = map_xy_to_rf({"ranges": final_ranges, "moves": moves})
    pprint(data)
    return jsonify({"ranges": final_ranges, "moves": moves, "game_type": "standard"})


@app.route('/custom', methods=['GET'])
def custom():
    """ """
    pass  # TODO: implement almost identical to standard except updated for game with custom pieces


@app.route('/custom', methods=['GET'])
def council():
    """ """
    pass  # TODO: implement almost identical to standard except updated for game with multiple kings


@app.route('/get_data_dict', methods=['GET'])
def get_data_dict():
    """get all the saved game data at the start of the game"""
    print('GET request, getting data of all the games')
    data_dict = {}
    games = os.listdir('./example_games')
    for game_name in games:
        data_dict[game_name] = parse_data(game_name)
    return jsonify(data_dict)


@app.route('/get_defs', methods=['GET'])
def get_defs():
    """get the JSON object inside defs.json"""
    print('GET request, getting data from defs.json')
    defs = {}
    f = open("defs.json", 'r')
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=True)
    return jsonify(defs)


if __name__ == "__main__":
    pass  # TODO: implent some kind of test
