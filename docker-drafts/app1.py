import os
import json
import pprint
import firebase_admin
from firebase_admin import credentials, db
from flask import Flask, jsonify, request, render_template, send_from_directory
from game_logic.color.get_next_color import get_next_color as get_enemy_color
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.fenParser.getFen.top.get_fen import get_fen
from game_logic.coordType.xy.map_rf_to_xy import map_rf_to_xy
from game_logic.color.get_ai_color import get_ai_color
from game_logic.fenParser.get_full_fen import get_full_fen
from api_helpers.offset_strs_to_list import offset_strs_to_list
from api_helpers.game_defs_offset_lists_to_strs import game_defs_offset_lists_to_strs as offsets_to_strs
from api_helpers.dd_offset_strs_to_list import dd_offset_strs_to_list
from api_helpers.init_empty_ranges import init_empty_ranges
from api_helpers.init_dd_empty_lists import init_dd_empty_lists
from api_helpers.id_assign_.top.id_assign import id_assign
from api_helpers.get_turn_data import get_turn_data
from api_helpers.parse_data import parse_data

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


app = Flask(__name__, static_url_path='',
                      static_folder='../react_frontend/build',
                      template_folder='../react_frontend/build')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/update', methods=['POST', 'GET'])
def update():
    """update the ranges of pieces and the state of the game and return to React """
    print("POST request, update()""")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    board, records = map_rf_to_xy(data['board']), map_rf_to_xy(data['records'])
    color, ai_color, piece_defs, id_dict = data['color'], get_ai_color(data['pt']), data['piece_defs'], data['id_dict']
    json_records = JsonRecords(records)  # pawn hist ids prev initialized
    turn_data = get_turn_data(board, color, ai_color, json_records, piece_defs, id_dict)
    enemy_turn_data = get_turn_data(board, get_enemy_color(color), ai_color, json_records, piece_defs, id_dict)
    turn_data.update({'enemy_ranges': enemy_turn_data['ranges']})
    return jsonify(turn_data)


@app.route('/update_council', methods=['POST', 'GET'])
def update_council():
    """ """
    pass  # TODO: implement same as update except updated for game with multiple kings


@app.route('/assign_ids', methods=['POST', 'GET'])
def assign_ids():
    """called by NewGame component on the front end. create id:piece-name arrangement unique to new game. substitute
    custom-piece(s) for of Rook, Bishop, Knight, or Queen, by assigning its usual id to the custom-piece name and
    custom-piece range-def. add custom pieces selected to be a pawn promotion choice.
    """
    data = request.get_data()
    data = json.loads(data)
    piece_names, subs = data['names'], data['subs']
    piece_names = id_assign(piece_names, subs)
    return jsonify(piece_names)


@app.route('/get_data_dict', methods=['POST', 'GET'])
def get_data_dict():
    """get all the saved game data at the start of the game"""
    print('GET request, getting data of all the games')
    data = request.get_data(as_text=True)
    data = json.loads(data)
    data_dict = db.reference().child('games').child('{}'.format(data['user'])).get()
    data_dict = init_dd_empty_lists(data_dict)
    data_dict = dd_offset_strs_to_list(data_dict)
    for game_name in data_dict.keys():
        data_dict[game_name] = parse_data(data_dict[game_name])
    return jsonify(data_dict)


@app.route('/get_defs', methods=['POST', 'GET'])
def get_defs():
    """get the JSON object inside defs.json"""
    print('GET request, getting data from defs.json')
    data = request.get_data(as_text=True)
    data = json.loads(data)
    defs = db.reference().child('defs').child('{}'.format(data['user'])).get()
    defs = init_empty_ranges(defs)
    defs = offset_strs_to_list(defs)
    return jsonify(defs)


@app.route('/save_def', methods=['POST', 'GET'])
def save_def():
    """save a piece definition to defs.json"""
    print("saving piece definition to defs.json")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    db.reference().child('defs').child('{}'.format(data['user'])).update(
        offsets_to_strs({data['piece_name']: data['piece_def']})
    )
    return "SUCCESSFULLY SAVED PIECE!", 201


@app.route('/delete_def', methods=['POST', 'GET'])
def delete_def():
    """deleting a piece definition from defs.json"""
    print('deleting a piece definition from defs.json')
    data = request.get_data(as_text=True)
    data = json.loads(data)
    db.reference().child('defs').child('{}'.format(data['user'])).child(data['piece_name']).delete()
    return "SUCCESSFULLY DELETED PIECE", 200


@app.route('/save', methods=["POST", "GET"])
def save():
    """save information about game as a db collection with documents being the different types of information
    game_name: name of the game being saved.
    board: data describing game board.
    json_records: data for special moves and other things (the dict, not the object)
    id_dict: key is id for piece, name is name of piece.
    range_defs: describes how each piece can move
    success or failure integer and message to backend.
    """
    print("POST request, save()""")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    pprint.pprint(data)
    fen = get_fen(map_rf_to_xy(data['board']))
    fen = get_full_fen(fen, data['fen_obj'])
    db.reference().child('games').child('{}'.format(data['user'])).update({data['game_name']: {
        'fen': fen,
        'type': data['game_type'],
        'pt': data['player_type'],
        'status': data['status'],
        'promos': data['promos'],
        'json': data['json_records'],
        'defs': offsets_to_strs(data['piece_defs']),
        'ids': data['id_dict']
    }})
    return "SUCCESSFULLY SAVED GAME!", 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
