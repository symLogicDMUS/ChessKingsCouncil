import os
import json
import firebase_admin
from firebase_admin import db, credentials
from pprint import pprint


cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_restore_point():
    """read the entire database and save to .json file who's name is integer value that is incremented,
       behaving like a primary key. the restore-points directory is not included it github repository
       and needs to be created locally.
    """
    new_restore_point_pk = str(len(os.listdir('./restore-points')) + 1) + ".json"
    data = db.reference().get()
    # create restore-points directory on local file system before running this module.
    with open("./restore-points/{}".format(new_restore_point_pk), "w") as outfile:
        json.dump(data, outfile, indent=4, sort_keys=False)


if __name__ == "__main__":
    set_restore_point()
