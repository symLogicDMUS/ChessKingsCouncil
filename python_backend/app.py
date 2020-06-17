from flask import Flask, jsonify, request
from pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from ranges.top.get_ranges import get_ranges
from getters.get_reset_piece_dicts import get_reset_piece_dicts
from getters.get_king_locs import get_king_locs
from threatArea.top.get_threat_area import get_threat_area
from restriction.get_num_pieces_checking_king import get_num_pieces_checking_king
from pins.top.get_pins import get_pins
from restriction.get_multithreat_restriction import get_multithreat_restriction
from ranges.top.get_final_ranges import get_final_ranges
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


@app.route('/update', methods=['POST'])
def update():
    """update the ranges of pieces and the state of the game and return to React """
    print("POST request, update()""")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    reformated = map_rf_to_xy({'board': data['board'], 'records': data['records'], 'color': data['color']})
    board, records, color, defs_ = reformated['board'], reformated['records'], reformated['color'], data['defs'],
    json_records = JsonRecords(None, None, j_records=records)
    init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
    init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records, defs_)
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
    return jsonify({"ranges": final_ranges, "moves": moves, "flask_method": "update"})


@app.route('/update_council', methods=['GET'])
def update_council():
    """ """
    pass  # TODO: implement same as update except updated for game with multiple kings


@app.route('/assign_ids', methods=['POST'])
def assign_ids():
    """called by NewGame component on the front end.
    create id:piece-name arangement unique to new game. substitute custom-piece(s) for of Rook, Bishop, Knight, or Queen,
    by assigning its usual id to the custom-piece name and custom-piece range-def. Return
    """


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
