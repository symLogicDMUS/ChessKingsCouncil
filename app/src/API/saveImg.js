import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveImgToDb(imgName, imgBase64Str) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('images').child(uid).update({[imgName]: imgBase64Str})
}


/**
 * For development only
 * @param imgName
 * @param imgBase64Str
 * @returns {Promise<Response>}
 */
async function saveImgLocal(imgName, imgBase64Str) {
    return await fetch('/save_img', {
        method: 'POST',
        body: JSON.stringify({
            'img_name': imgName,
            'img_str': imgBase64Str,
        })
    })
}

export function saveImg(mode, imgName, imgBase64Str) {
    if (mode === 'production') return Promise.all([saveImgToDb(imgName, imgBase64Str)])
    else return Promise.all([saveImgLocal(imgName, imgBase64Str)])
}