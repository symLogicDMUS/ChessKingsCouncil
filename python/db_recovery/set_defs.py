import firebase_admin
from firebase_admin import db, credentials
from get_defs import get_defs

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_defs(uid):
    """reinitialize piece definitions for user"""
    sampleDefs = get_defs()
    db.reference().child('sampleDefs').set({uid: sampleDefs})


if __name__ == "__main__":
    # uid.txt not included in git repos
    f = open("uid2.txt", "r")
    uid = f.readline()
    set_defs(uid)
