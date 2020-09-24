import os
import firebase_admin
from firebase_admin import db, credentials
from db_setup.get_data import get_data

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_games():
    """ """
    data_dict = {}
    for game_name in os.listdir('./saved games'):
        data_dict[game_name] = get_data('saved games', game_name)
    for game_name in os.listdir('./example_games'):
        data_dict[game_name] = get_data('example_games', game_name)
    db.reference().child('games').set({'4aI5akbkxea25v3sl66Lo608UIZ2': data_dict})


if __name__ == "__main__":
    set_games()