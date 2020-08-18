import firebase_admin
from google.cloud import storage
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, request, render_template
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.fenParser.getFen.top.get_fen import get_fen
from game_logic.coordType.xy.map_rf_to_xy import map_rf_to_xy
from api_helpers.parse_data import parse_data
from api_helpers.id_assign_.top.id_assign import id_assign
from game_logic.fenParser.gen_fen_str import get_fen_str
from game_logic.color.get_next_color import get_next_color as get_enemy_color
from game_logic.color.get_ai_color import get_ai_color
from api_helpers.new_data import new_data
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


@app.route("/")
def index():
    return render_template('index.html')


@app.route('/update', methods=['POST'])
def update():
    """update the ranges of pieces and the state of the game and return to React """
    print("POST request, update()""")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    reformated = map_rf_to_xy({'board': data['board'], 'records': data['records'], 'color': data['color']})
    board, records, color, player_type, defs_ = reformated['board'], reformated['records'], reformated['color'], data[
        'player_type'], data['defs']
    ai_color = get_ai_color(player_type)
    json_records = JsonRecords(None, None, j_records=records)
    data = new_data(board, color, ai_color, defs_, json_records)
    enemy_data = new_data(board, get_enemy_color(color), ai_color, defs_, json_records)
    data.update({'enemy_ranges': enemy_data['ranges']})
    pprint(data)
    return jsonify(data)


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


# TODO: methods below need to be made stateless

@app.route('/get_data_dict', methods=['GET'])
def get_data_dict():
    """get all the saved game data at the start of the game"""
    print('GET request, getting data of all the games')
    data_dict = db.collection(u'games').document(u'symLogicDMUS').get()
    return jsonify(data_dict)


@app.route('/get_defs', methods=['GET'])
def get_defs():
    """get the JSON object inside defs.json"""
    print('GET request, getting data from defs.json')
    defs = db.collection(u'defs').document(u'symLogicDMUS').get()
    return jsonify(defs)


@app.route('/save_def', methods=['POST'])
def save_def():
    """save a piece definition to defs.json"""
    print("saving piece definition to defs.json")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    db.collection(u'defs').document(u'symLogicDMUS').update({data['piece_name']: data['piece_def']})
    return "Done", 201


@app.route('/delete_def', methods=['POST'])
def delete_def():
    """deleting a piece definition from defs.json"""
    print('deleting a piece definition from defs.json')
    data = request.get_data(as_text=True)
    data = json.loads(data)
    db.collection(u'defs').document(u'symLogicDMUS').update({data['piece_name']: firestore.DELETE_FIELD})
    return "Done", 201


@app.route('/save', methods=["POST"])
def save():
    """save information about game in its designated folder
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
    game_type = data['game_type']
    player_type = data['player_type']
    board = data['board']
    json_records = data['json_records']
    fen_obj = data['fen_obj']
    id_dict = data['id_dict']
    range_defs = data['range_defs']
    status = data['status_obj']
    promos = data['promos']

    fen = get_fen(board)
    fen = get_fen_str(fen, fen_obj)

    db.collection(u'games').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'fen').set(
        {'fen': fen})

    db.collection(u'games').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'json_records').set(
        {'json_records': json_records})

    db.collection(u'games').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'ids').set(
        {'id_dict': id_dict})

    db.collection(u'games').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'defs').set(
        {'piece_definitions': range_defs})

    db.collection(u'games').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'promos').set(
        {'promo_choices': promos})

    db.collection(u'games').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'status').set(
        {'status': status})

    db.collection(u'games').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'type').set(
        {'game_type': game_type})

    db.collection(u'games').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'pt').set(
        {'player_type': player_type})


if __name__ == '__main__':
    # app.run(debug=True, host='0.0.0.0', port=5000)
    explicit()
    for game_name in os.listdir('example_games'):
        # 1: fen
        f = open("./example_games/{}/{}.fen".format(game_name, game_name), 'r')
        fen = f.readline()
        f.close()
        db.collection(u'users').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'fen').set(
            {'fen': fen})

        # 2: json_records
        f = open("./example_games/{}/{}.json".format(game_name, game_name), 'r')
        data = f.read()
        json_records = json.loads(data)
        json.dumps(json_records)
        f.close()
        db.collection(u'games').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'json_records').set(
            {'json_records': json_records})

        # 3: type
        f = open("./example_games/{}/{}.type".format(game_name, game_name), 'r')
        game_type = f.readline()
        f.close()
        db.collection(u'users').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'type').set(
            {'game_type': game_type})

        # 4: pt
        f = open("./example_games/{}/{}.pt".format(game_name, game_name), 'r')
        player_type = f.read()
        f.close()
        db.collection(u'users').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'pt').set(
            {'player_type': player_type})

        # 5: status
        f = open("./example_games/{}/{}.status".format(game_name, game_name), 'r')
        data = f.read()
        status = json.loads(data)
        json.dumps(status)
        f.close()
        db.collection(u'users').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'status').set(
            {'status': status})

        # 6: ids
        f = open("./example_games/{}/{}.ids".format(game_name, game_name), 'r')
        data = f.read()
        id_dict = json.loads(data)
        json.dumps(id_dict)
        f.close()
        db.collection(u'users').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'ids').set(
            {'id_dict': id_dict})

        # 7: defs
        f = open("./example_games/{}/{}.defs".format(game_name, game_name), 'r')
        data = f.read()
        range_defs = json.loads(data)
        json.dumps(range_defs)
        f.close()
        db.collection(u'users').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'piece_defs').set(
            {'piece_definitions': range_defs})

        # 8: promos
        f = open("./example_games/{}/{}.promos".format(game_name, game_name), 'r')
        data = f.read()
        promo_choices = json.loads(data)
        json.dumps(promo_choices)
        f.close()
        db.collection(u'users').document(u'symLogicDMUS').collection(u'{}'.format(game_name)).document(u'promos').set(
            {'promo_choices': promo_choices})

