import copy
import base64
import firebase_admin
from firebase_admin import db, credentials
from img_names import _img_names

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_imgs(rel_path, img_names):
    """ """
    b64_strs = {}
    for img_name in img_names:
        with open(rel_path + img_name, "rb") as image_file:
            encoded_string = base64.b64encode(image_file.read())
        img_name = img_name.replace('.', '-')
        b64_strs[img_name] = str(encoded_string)
    return b64_strs


if __name__ == "__main__":
    img_dict = set_imgs("./imgs/", copy.deepcopy(_img_names))
    db.reference().child('images').set({'4aI5akbkxea25v3sl66Lo608UIZ2': img_dict})
