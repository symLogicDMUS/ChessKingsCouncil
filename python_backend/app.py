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
from parse_data import parse_data
from fenParser.getFen.top.get_fen import get_fen
from id_assign_.top.id_assign import id_assign
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
    pprint(final_ranges)
    return jsonify({"ranges": final_ranges, "moves": moves})


@app.route('/save', methods=["POST"])
def save():
    """save information about game in its designated folder
    game_name: name of the game being saved.
    board: data describing game board.
    json_records: data for special moves and other things
    id_dict: key is id for piece, name is name of piece.
    range_defs: describes how each piece can move
    success or failure integer and message to backend.
    """
    print("POST request, save()""")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    game_name = data['game_name']
    board = data['board']
    json_records = data['json_records']
    id_dict = data['id_dict']
    range_defs = data['range_defs']

    # create game folder:
    os.mkdir('./saved_games/{}'.format(game_name))

    # saving fen
    fen = get_fen(map_rf_to_xy(board))
    f = open('./saved_games/{}/{}.fen'.format(game_name, game_name), 'w')
    f.write(fen)
    f.close()

    # save json_records
    with open('./saved_games/{}/{}.json'.format(game_name, game_name), 'w') as outfile:
        json.dump(json_records, outfile, indent=4, sort_keys=False)
    outfile.close()

    # save id_dict
    with open('./saved_games/{}/{}.ids'.format(game_name, game_name), 'w') as outfile:
        json.dump(id_dict, outfile, indent=4, sort_keys=True)

    # save range_defs
    with open('./saved_games/{}/{}.defs'.format(game_name, game_name), 'w') as outfile:
        json.dump(range_defs, outfile, indent=4, sort_keys=True)

    print("Save Successful!")
    return "Save Successfull", 201

    # save image
    # f = open('../../saved_games/{}/{}.svg'.format(game_name, game_name), 'w') # create
    # board = chess.Board(fen)
    # board_image = chess.svg.board(board=board)
    # f.write(board_image)
    # f.close()
    # drawing = svg2rlg('../../saved_games/{}/{}.svg'.format(game_name, game_name))
    # renderPM.drawToFile(drawing, '../../saved_games/{}/{}.png'.format(game_name, game_name), fmt="PNG")
    # os.remove('../../saved_games/{}/{}.svg'.format(game_name, game_name))


@app.route('/update_council', methods=['GET'])
def update_council():
    """ """
    pass  # TODO: implement same as update except updated for game with multiple kings


@app.route('/assign_ids', methods=['POST'])
def assign_ids():
    """called by NewGame component on the front end.
    create id:piece-name arangement unique to new game. substitute custom-piece(s) for of Rook, Bishop, Knight, or Queen,
    by assigning its usual id to the custom-piece name and custom-piece range-def. add custom pieces selected to be a
    pawn promotion choice.
    """
    data = request.get_data()
    data = json.loads(data)
    piece_names, subs = data['names'], data['subs']
    piece_names = id_assign(piece_names, subs)

    return jsonify(piece_names)


@app.route('/get_data_dict', methods=['GET'])
def get_data_dict():
    """get all the saved game data at the start of the game"""
    print('GET request, getting data of all the games')
    f = open("./defs.json", "r")
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=False)
    games = os.listdir('./example_games')
    data_dict = {}
    for game_name in games:
        print(game_name)
        data_dict[game_name] = parse_data(game_name, defs)
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


@app.route('/save_defs', methods=['POST'])
def save_defs():
    """save the definitions object of piece ranges to defs.json"""
    print("saving piece range definitions")
    data = request.get_data(as_text=True)
    defs = json.loads(data)
    with open("./defs.json", "w") as outfile:
        json.dump(defs, outfile, indent=4, sort_keys=False)
    outfile.close()
    return "Done", 201


if __name__ == "__main__":
    pass  # TODO: implent some kind of test
