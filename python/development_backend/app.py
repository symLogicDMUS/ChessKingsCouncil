import os
import json
from flask import Flask, jsonify, request

app = Flask(__name__)


def write_json(test_obj, save_path):
    """write json object to file to be used for tests"""
    with open(save_path, 'w') as outfile:
        json.dump(test_obj, outfile, indent=4, sort_keys=False)
    outfile.close()


def get_local_game(game_file):
    f = open("./local_data/saved_games/{}".format(game_file), 'r')
    data = f.read()
    game_data = json.loads(data)
    f.close()
    game_name, dot, exten = game_file.partition('.')
    return game_data, game_name


def get_local_games():
    """ """
    data_dict = {}
    for game_file in os.listdir("./local_data/saved_games"):
        game_data, game_name = get_local_game(game_file)
        data_dict[game_name] = game_data
    return data_dict


def get_local_imgs():
    """ """
    img_strs = {}
    for file_name in os.listdir("./development_backend/local_data/img_strs"):
        f = open("./development_backend/local_data/img_strs/{}".format(file_name), "r")
        img_str = f.read()
        img_name = file_name.replace(".txt", "")
        img_strs[img_name] = img_str
    return img_strs


def get_local_defs():
    f = open("./local_data/sampleDefs.json", 'r')
    data = f.read()
    sampleDefs = json.loads(data)
    json.dumps(sampleDefs, indent=4, sort_keys=True)
    return sampleDefs


@app.route('/get_defs', methods=['GET', 'POST'])
def get_defs():
    """get the JSON object inside sampleDefs.json"""
    f = open("./local_data/sampleDefs.json", 'r')
    data = f.read()
    sampleDefs = json.loads(data)
    json.dumps(sampleDefs, indent=4, sort_keys=True)
    return jsonify(sampleDefs)


@app.route('/save_def', methods=['POST', 'GET'])
def save_def():
    """save a piece definition to sampleDefs.json"""
    data = request.load(as_text=True)
    data = json.loads(data)
    sampleDefs = get_local_defs()
    sampleDefs[data['piece_name']] = data['piece_def']
    write_json(sampleDefs, "./local_data/sampleDefs.json")
    return "SUCCESSFULLY SAVED PIECE!", 201


@app.route('/delete_def', methods=['POST', 'GET'])
def delete_def():
    """deleting a piece definition from sampleDefs.json"""
    data = request.load(as_text=True)
    data = json.loads(data)
    sampleDefs = get_local_defs()
    del sampleDefs[data['piece_def']]
    write_json(sampleDefs, './local_data/sampleDefs.json')
    return "SUCCESSFULLY DELETED PIECE", 200


@app.route('/save_game', methods=['POST', 'GET'])
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


@app.route('/delete_game', methods=['POST', 'GET'])
def delete_game():
    """ """
    data = request.load(as_text=True)
    data = json.loads(data)
    data_dict = get_local_games()
    del data_dict[data['game_name']]
    write_json(data_dict, './local_data/sampleDefs.json')


@app.route('/get_games', methods=['GET',  'POST'])
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


@app.route('/get_imgs', methods=['GET', 'POST'])
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
    f = open('./local_data/img_strs/{}.txt'.format(data['img_name']), 'w')
    f.write(data['img_str'])
    f.close()
    return "SUCCESSFULLY SAVED IMAGE!", 200


@app.route('/delete_img', methods=['POST', 'GET'])
def delete_img():
    """ """
    data = request.load(as_text=True)
    data = json.loads(data)
    os.remove('./local_data/img_strs/{}.txt'.format(data['img_name']))
    return "SUCCESSFULLY DELETED IMAGE!", 200


@app.route('/save_img_dict', methods=['POST', 'GET'])
def save_img_dict():
    """ """
    data = request.load(as_text=True)
    data = json.loads(data)
    write_json(data['img_dict'], './local_data/img_strs/dicts/base_64_img_strs.json')
    for img_name in data['img_dict'].keys():
        f = open('./local_data/img_strs/{}.txt'.format(img_name), 'w')
        f.write(data['img_dict'][img_name])
        f.close()


if __name__ == '__main__':
    pass  # TODO: test
