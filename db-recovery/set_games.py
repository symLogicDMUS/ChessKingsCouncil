import os
import firebase_admin
from firebase_admin import db, credentials
from get_games import get_games

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_games():
    """ """
    data_dict = get_games()
    db.reference().child('games').set({'4aI5akbkxea25v3sl66Lo608UIZ2': data_dict})


if __name__ == "__main__":
    set_games()