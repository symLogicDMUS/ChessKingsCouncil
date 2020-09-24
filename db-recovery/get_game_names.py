import firebase_admin
from firebase_admin import db, credentials
from db_setup.get_defs import get_defs
from pprint import pprint


cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def get_games_name():
    """ """
    game_names = []
    data_dict = db.reference().child('games').child('4aI5akbkxea25v3sl66Lo608UIZ2').get()
    for game_name in data_dict.keys():
        game_names.append(game_name)
    return game_names


if __name__ == "__main__":
    game_names = get_games_name()
    for game_name in game_names:
        print(game_name)