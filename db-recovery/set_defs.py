import firebase_admin
from firebase_admin import db, credentials
from db_setup.get_defs import get_defs

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_defs():
    """ """
    defs = get_defs()
    db.reference().child('defs').set({'4aI5akbkxea25v3sl66Lo608UIZ2': defs})


if __name__ == "__main__":
    set_defs()