import firebase_admin
from firebase_admin import db, credentials
from get_games_local import get_games_local

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_games_local(uid):
    """ """
    data_dict = get_games_local()
    db.reference().child('games').child(uid).update(data_dict)


if __name__ == "__main__":
    f = open("uid.txt", "r")
    uid = f.read()
    set_games_local(uid)