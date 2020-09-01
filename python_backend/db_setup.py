import os
import json
import firebase_admin
from firebase_admin import db, credentials
from pprint import pprint

cred = credentials.Certificate('/home/brian/ChessKingsCouncil/python_backend/ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def get_data(location, game_name):
    """get the data saved in the files for a game_name"""

    print(game_name)

    f = open("/home/brian/ChessKingsCouncil/python_backend/{}/{}/{}.fen".format(location, game_name, game_name), 'r')
    fen = f.readline()
    f.close()

    f = open("/home/brian/ChessKingsCouncil/python_backend/{}/{}/{}.json".format(location, game_name, game_name), 'r')
    data = f.read()
    json_records = json.loads(data)
    json.dumps(json_records)
    f.close()

    f = open("/home/brian/ChessKingsCouncil/python_backend/{}/{}/{}.type".format(location, game_name, game_name), 'r')
    game_type = f.readline()
    f.close()

    f = open("/home/brian/ChessKingsCouncil/python_backend/{}/{}/{}.pt".format(location, game_name, game_name), 'r')
    player_type = f.read()
    f.close()

    f = open("/home/brian/ChessKingsCouncil/python_backend/{}/{}/{}.status".format(location, game_name, game_name), 'r')
    data = f.read()
    status = json.loads(data)
    json.dumps(status)
    f.close()

    f = open("/home/brian/ChessKingsCouncil/python_backend/{}/{}/{}.ids".format(location, game_name, game_name), 'r')
    data = f.read()
    id_dict = json.loads(data)
    json.dumps(id_dict)
    f.close()

    f = open("/home/brian/ChessKingsCouncil/python_backend/{}/{}/{}.defs".format(location, game_name, game_name), 'r')
    data = f.read()
    piece_defs = json.loads(data)
    json.dumps(piece_defs)
    f.close()

    f = open("/home/brian/ChessKingsCouncil/python_backend/{}/{}/{}.promos".format(location, game_name, game_name), 'r')
    data = f.read()
    promo_choices = json.loads(data)
    json.dumps(promo_choices)
    f.close()

    return {"fen": fen,
            "json": json_records,
            "type": game_type,
            "pt": player_type,
            "status": status,
            "ids": id_dict,
            "defs": piece_defs,
            "promos": promo_choices}


def get_defs():
    """get the JSON object inside defs.json"""
    f = open("./defs.json", 'r')
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=True)
    return defs


def set_defs():
    """ """
    defs = get_defs()
    db.reference().child('defs').set({'symLogicDMUS': defs})


def set_game_names():
    """ """
    data_dict = db.reference().child('games').child('symLogicDMUS').get()
    game_names = list(data_dict.keys())
    db.reference().child('game names').set({'symLogicDMUS': game_names})


def count_castle_record_errors():
    """ """
    errors = 0
    data_dict = db.reference().child('games').child('symLogicDMUS').get()
    for game_name in data_dict.keys():
        if len(data_dict[game_name]['json']['rooks_moved'].keys()) != 4:
            print(game_name, "rooks_moved error")
            errors += 1
        if len(data_dict[game_name]['json']['kings_moved'].keys()) != 2:
            print(game_name, "kings_moved error")
            errors += 1
    print("errors: ", errors)


def set_games():
    """ """
    data_dict = {}
    for game_name in os.listdir('/home/brian/ChessKingsCouncil/python_backend/saved games'):
        data_dict[game_name] = get_data('saved games', game_name)
    for game_name in os.listdir('/home/brian/ChessKingsCouncil/python_backend/example_games'):
        data_dict[game_name] = get_data('example_games', game_name)
    db.reference().child('games').set({'symLogicDMUS': data_dict})


if __name__ == "__main__":
    # set_games()
    # set_defs()
    # count_castle_record_errors()
    set_game_names()