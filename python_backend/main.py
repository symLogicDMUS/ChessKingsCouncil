import os
import firebase_admin
from google.cloud import storage
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, request, render_template
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.fenParser.getFen.top.get_fen import get_fen
from game_logic.coordType.xy.map_rf_to_xy import map_rf_to_xy
from api_helpers.parse_data import parse_data
from api_helpers.id_assign_.top.id_assign import id_assign
from game_logic.fenParser.get_full_fen import get_full_fen
from game_logic.color.get_next_color import get_next_color as get_enemy_color
from game_logic.color.get_ai_color import get_ai_color
from api_helpers.turn_data import turn_data
from pprint import pprint
import json
import os

cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
    'projectId': "chess-king-council",
})

db = firestore.client()


def explicit():
    """ """
    storage_client = storage.Client.from_service_account_json(
        '/home/brian/ChessKingsCouncil/Chess King Council-10297b2460f1.json')
    buckets = list(storage_client.list_buckets())
    print(buckets)


app = Flask(__name__, static_folder="build/static", template_folder="build")


# @app.route("/")
# def index():
#     return render_template('index.html')


@app.route('/update', methods=['POST'])
def update():
    """update the ranges of pieces and the state of the game and return to React """
    print("POST request, update()""")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    rfd = map_rf_to_xy({'board': data['board'], 'records': data['records']})  # rfd: rank, file, data
    board, records, color, pt, defs_ = rfd['board'], rfd['records'], data['color'], data['player_type'], data['defs']
    ai_color = get_ai_color(pt)
    json_records = JsonRecords(records)
    data = turn_data(board, color, ai_color, defs_, json_records)
    enemy_data = turn_data(board, get_enemy_color(color), ai_color, defs_, json_records)
    data.update({'enemy_ranges': enemy_data['ranges']})
    pprint(data)
    return jsonify(data)


@app.route('/update_council', methods=['GET'])
def update_council():
    """ """
    pass  # TODO: implement same as update except updated for game with multiple kings


@app.route('/assign_ids', methods=['POST'])
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


def get_game_data(user, game_name):
    """ """
    user_games = db.collection(u'games').document(u'{}'.format(user))

    fen = user_games.collection(u'{}'.format(game_name)).document(u'fen').get()
    json_records = user_games.collection(u'{}'.format(game_name)).document(u'json').get()
    id_dict = user_games.collection(u'{}'.format(game_name)).document(u'ids').get()
    player_type = user_games.collection(u'{}'.format(game_name)).document(u'pt').get()
    game_type = user_games.collection(u'{}'.format(game_name)).document(u'type').get()
    status = user_games.collection(u'{}'.format(game_name)).document(u'status').get()
    promo_choices = user_games.collection(u'{}'.format(game_name)).document(u'promos').get()
    piece_defs = user_games.collection(u'{}'.format(game_name)).document(u'defs').get()

    return fen['fen'], json_records['json_records'], id_dict['id_dict'], player_type['player_type'], \
           game_type['game_type'], status['status'], promo_choices['promo_choices'], piece_defs['piece_defs']


def get_game_names(user):
    """ """
    doc = db.collection(u'games').document(u'{}'.format(user)).get()
    doc_dict = doc.to_dict()
    return doc_dict['game_names']


@app.route('/get_data_dict', methods=['GET'])
def get_data_dict():
    """get all the saved game data at the start of the game"""
    print('GET request, getting data of all the games')
    data_dict = {}
    data = request.get_data(as_text=True)
    data = json.loads(data)
    user = data['user']
    game_names = get_game_names(user)
    for game_name in game_names:
        fen, json_records, id_dict, p_type, g_type, status, p_choices, p_defs = get_game_data(user, game_name)
        data_dict[game_name] = {'json_records': json_records,
                                'id_dict': id_dict,
                                'defs': p_defs,
                                'status': status,
                                'player_type': p_type,
                                'game_type': g_type,
                                'promo_choices': p_choices}
        data_dict[game_name].update(parse_data(fen, json_records, p_type, id_dict, p_defs))
    return jsonify(data_dict)


def get_def(user, color, piece_name):
    """ """
    user_defs = db.collection(u'defs').document(u'{}'.format(user))
    return user_defs.collection(u'{}'.format(piece_name)).document(u'{}'.format(color)).get()


@app.route('/get_defs', methods=['GET'])
def get_defs():
    """get the JSON object inside defs.json"""
    print('GET request, getting data from defs.json')
    data = request.get_data(as_text=True)
    data = json.loads(data)
    user = data['user']
    defs = {}
    fields = db.collection(u'defs').document(u'{}'.format(user)).get()
    piece_names = fields['piece_names']
    for piece_name in piece_names:
        defs[piece_name]['W'] = get_def(user, 'W', piece_name)
        defs[piece_name]['B'] = get_def(user, 'B', piece_name)
    return jsonify(defs)


@app.route('/save_def', methods=['POST'])
def save_def():
    """save a piece definition to defs.json"""
    print("saving piece definition to defs.json")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    user_defs = db.collection(u'defs').document(u'{}'.format(data['user']))
    user_defs.collection(u'{}'.format(data['piece_name'])).document(u'W').update(data['piece_def']['W'])
    user_defs.collection(u'{}'.format(data['piece_name'])).document(u'B').update(data['piece_def']['B'])
    return "Done", 201


@app.route('/delete_def', methods=['POST'])
def delete_def():
    """deleting a piece definition from defs.json"""
    print('deleting a piece definition from defs.json')
    data = request.get_data(as_text=True)
    data = json.loads(data)
    user_defs = db.collection(u'defs').document(u'{}'.format(data['user']))
    user_defs.collection(u'{}'.format(data['piece_name'])).document(u'W').delete()
    user_defs.collection(u'{}'.format(data['piece_name'])).document(u'B').delete()
    return "Done", 201


@app.route('/save', methods=["POST"])
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
    game_name = data['game_name']
    fen = get_fen(data['board'])
    fen = get_full_fen(fen, data['fen_obj'])

    user_games = db.collection(u'games').document(u'{}'.format(data['user']))

    user_games.collection(u'{}'.format(game_name)).document(u'fen').set({'fen': fen})
    user_games.collection(u'{}'.format(game_name)).document(u'json_records').set({'json_records': data['json_records']})
    user_games.collection(u'{}'.format(game_name)).document(u'ids').set({'id_dict': data['id_dict']})
    user_games.collection(u'{}'.format(game_name)).document(u'defs').set({'piece_definitions': data['range_defs']})
    user_games.collection(u'{}'.format(game_name)).document(u'promos').set({'promo_choices': data['promos']})
    user_games.collection(u'{}'.format(game_name)).document(u'status').set({'status': data['status']})
    user_games.collection(u'{}'.format(game_name)).document(u'type').set({'game_type': data['game_type']})
    user_games.collection(u'{}'.format(game_name)).document(u'pt').set({'player_type': data['player_type']})


if __name__ == '__main__':
    # app.run(debug=True, host='0.0.0.0', port=5000)
    explicit()
