import os
import json
from pprint import pprint
from write_json import write_json
from flask import Flask, jsonify, request
from get_local_defs import get_local_defs

app = Flask(__name__)


@app.route('/get_defs', methods=['GET'])
def get_defs():
    """get the JSON object inside defs.json"""
    f = open("./local_data/defs.json", 'r')
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=True)
    return jsonify(defs)


@app.route('/save_def', methods=['POST', 'GET'])
def save_def():
    """save a piece definition to defs.json"""
    data = request.load(as_text=True)
    data = json.loads(data)
    defs = get_local_defs()
    defs[data['piece_name']] = data['piece_defs']
    write_json(defs, "./local_data/defs.json")
    return "SUCCESSFULLY SAVED PIECE!", 201


@app.route('/delete_def', methods=['POST', 'GET'])
def delete_def():
    """deleting a piece definition from defs.json"""
    data = request.load(as_text=True)
    data = json.loads(data)
    defs = get_local_defs()
    del defs[data['piece_name']]
    write_json(defs, './local_data/defs.json')
    return "SUCCESSFULLY DELETED PIECE", 200


@app.route('/save_game', methods=["POST", "GET"])
def save_game():
    """save information about game as a db collection with documents being the different types of information
    game_name: name of the game being saved.
    board: data describing game board.
    json_records: data for special moves and other things (the dict, not the object)
    id_dict: key is id for piece, name is name of piece.
    range_defs: describes how each piece can move
    success or failure integer and message to backend.
    """
    data = request.load(as_text=True)
    data = json.loads(data)
    write_json(data['game_data'], './local_data/saved_games/{}.json'.format(data['game_name']))
    return "SUCCESSFULLY SAVED GAME!", 200


@app.route('/get_games', methods=['GET'])
def get_games():
    """ """
    data_dict = {}
    for game_file in os.listdir("./local_data/saved_games"):
        f = open("./local_data/saved_games/{}".format(game_file), 'r')
        data = f.read()
        game_data = json.loads(data)
        game_name, dot, exten = game_file.partition('.')
        data_dict[game_name] = game_data
        f.close()
    return jsonify(data_dict)


@app.route('/get_imgs', methods=['GET'])
def get_imgs():
    """ """
    img_strs = {}
    for file_name in os.listdir("./local_data/img_strs"):
        f = open("./local_data/img_strs/{}".format(file_name), "r")
        img_str = f.read()
        img_name = file_name.replace(".txt", "")
        img_strs[img_name] = img_str
    return jsonify(img_strs)


@app.route('/save_img', methods=['POST', 'GET'])
def save_img():
    """ """
    data = request.load(as_text=True)
    data = json.loads(data)
    i = data['img_name'].rfind('-')
    exten = data['img_name'][i+1:]
    f = open('./local_data/img_strs/{}.{}'.format(data['img_name'], exten), 'w')
    f.write(data['img_str'])
    f.close()
    return "SUCCESSFULLY SAVED IMAGE!", 200


@app.route('/delete_img', methods=['POST', 'GET'])
def delete_img():
    """ """
    data = request.load(as_text=True)
    data = json.loads(data)
    i = data['img_name'].rfind('-')
    exten = data['img_name'][i+1:]
    os.remove('./local_data/img_strs/{}.{}'.format(data['img_name'], exten))
    return "SUCCESSFULLY DELETED IMAGE!", 200


if __name__ == '__main__':
    pass  # app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))