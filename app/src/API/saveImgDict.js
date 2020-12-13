import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveImgDictToDb(imgDict) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('images').child(uid).update(imgDict)
}

/**
 * For development only
 * @param imgDict
 * @returns {Promise<Response>}
 */
async function saveImgDictLocal(imgDict) {
    return await fetch('/save_img_dict', {
        method: 'POST',
        body: JSON.stringify({
            'img_dict': imgDict,
        })
    })
}

export function saveImgDict(mode, imgDict) {
    if (mode === 'production') return Promise.all([saveImgDictToDb(imgDict)])
    else return Promise.all([saveImgDictLocal(imgDict)])
}