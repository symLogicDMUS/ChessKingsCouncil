from flask import Flask, jsonify, request
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.coordType.xy.map_rf_to_xy import map_rf_to_xy
from game_logic.fenParser.getFen.top.get_fen import get_fen
from flask_helpers.parse_data import parse_data
from flask_helpers.id_assign_.top.id_assign import id_assign
from flask_helpers.gen_fen_str import get_fen_str
from flask_helpers.replace_pawn_id_with_rankfile import replace_pawn_id_with_rankfile
from game_logic.color.get_next_color import get_next_color as get_enemy_color
from flask_helpers.new_data import new_data
import json
import os

app = Flask(__name__)


@app.route('/update', methods=['POST'])
def update():
    """update the ranges of pieces and the state of the game and return to React """
    print("POST request, update()""")
    data = request.get_data(as_text=True)
    data = json.loads(data)
    reformated = map_rf_to_xy({'board': data['board'], 'records': data['records'], 'color': data['color']})
    board, records, color, defs_ = reformated['board'], reformated['records'], reformated['color'], data['defs']
    json_records = JsonRecords(None, None, j_records=records)
    data = new_data(board, color, defs_, json_records)
    enemy_data = new_data(board, get_enemy_color(color), defs_, json_records)
    return jsonify({'ranges': data['ranges'], 'enemy_ranges': enemy_data['ranges'],
                    'moves': data['moves'], 'status': data['status']})


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
    board = data['board']
    json_records = data['json_records']
    fen_obj = data['fen_obj']
    id_dict = data['id_dict']
    range_defs = data['range_defs']
    status_obj = data['status_obj']

    # create game folder:
    if not os.path.isdir('./saved_games/{}'.format(game_name)):
        os.mkdir('./saved_games/{}'.format(game_name))

    # saving fen
    fen = get_fen(map_rf_to_xy(board))
    fen = get_fen_str(fen, fen_obj)
    print(fen)
    f = open('./saved_games/{}/{}.fen'.format(game_name, game_name), 'w')
    f.write(fen)
    f.close()

    # save json_records
    json_records["pawn_histories"] = replace_pawn_id_with_rankfile(json_records["pawn_histories"])
    with open('./saved_games/{}/{}.json'.format(game_name, game_name), 'w') as outfile:
        json.dump(json_records, outfile, indent=4, sort_keys=False)
    outfile.close()

    # save id_dict
    with open('./saved_games/{}/{}.ids'.format(game_name, game_name), 'w') as outfile:
        json.dump(id_dict, outfile, indent=4, sort_keys=True)

    # save range_defs
    with open('./saved_games/{}/{}.defs'.format(game_name, game_name), 'w') as outfile:
        json.dump(range_defs, outfile, indent=4, sort_keys=True)

    # save game status
    with open('./saved_games/{}/{}.status'.format(game_name, game_name), 'w') as outfile:
        json.dump(status_obj, outfile, indent=4, sort_keys=True)

    print("Save Successful!")
    return "Save Successfull", 201

    # TODO: save image of board to file


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
    games = os.listdir('./example_games')
    data_dict = {}
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
