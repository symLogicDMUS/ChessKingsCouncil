import os
import firebase_admin
from firebase_admin import db, credentials
from get_data import get_data
from pprint import pprint


cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def get_game_names():
    """ """
    game_names = []
    for game_name in os.listdir('./saved games'):
        game_names.append(game_name)
    for game_name in os.listdir('./example_games'):
        game_names.append(game_name)
    return game_names


if __name__ == "__main__":
    game_names = get_game_names()
    for game_name in game_names:
        print(game_name)