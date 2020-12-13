import os
from get_data import get_data
import firebase_admin
from firebase_admin import db, credentials
from write_json import write_json
cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_games_council(uid):
    """ """
    data_dict = {}
    for game_name in os.listdir("./example_games"):
        game_data = get_data("./example_games", game_name)
        game_data['type'] = "council"
        game_data['promos'].append('King')
        write_json(game_data, "./test_objects/{}.json".format("council_" + game_name))
        data_dict["council_" + game_name] = game_data
    db.reference().child('games').child(uid).update(data_dict)


if __name__ == "__main__":
    f = open("uid.txt", "r")
    uid = f.read()
    set_games_council(uid)
