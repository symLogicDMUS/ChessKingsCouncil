import os
import firebase_admin
from firebase_admin import db, credentials
from get_games import get_games

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_games(uid):
    """ """
    data_dict = get_games()
    db.reference().child('games').set({uid: data_dict})


if __name__ == "__main__":
    # uid.txt not included in git repos
    f = open("uid2.txt", "r")
    uid = f.readline()
    set_games(uid)
