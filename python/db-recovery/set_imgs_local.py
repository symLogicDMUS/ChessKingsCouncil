import firebase_admin
from firebase_admin import db, credentials
from write_json import write_json

cred = credentials.Certificate('./ckc-firebase-admin-sdk.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://chess-king-council.firebaseio.com/",
})


def set_imgs_local(uid):
    """ """
    imgs = db.reference().child('images').child(uid).get()
    write_json(imgs, './test_objects/base_64_img_strs.json')
    for img_name in imgs.keys():
        f = open("./test_objects/img_strs/{}".format(img_name + ".txt"), "w")
        f.write(imgs[img_name])
        f.close()


if __name__ == "__main__":
    f = open("uid.txt", "r")
    uid = f.read()
    set_imgs_local(uid)