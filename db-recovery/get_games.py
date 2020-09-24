import os
import json
import firebase_admin
from get_data import get_data
from firebase_admin import db, credentials
from pprint import pprint

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def get_games():
    """ """
    data_dict = {}
    for game_name in os.listdir('./saved games'):
        data_dict[game_name] = get_data('saved games', game_name)
    for game_name in os.listdir('./example_games'):
        data_dict[game_name] = get_data('example_games', game_name)
    return data_dict


if __name__ == "__main__":
    data_dict = get_games()
    for game_name in data_dict.keys():
        print(game_name)