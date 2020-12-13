import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deletePieceImgFromDb(imgName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return firebase.database().ref().child('images').child(uid).child(imgName).remove()
}

/**
 * For development only
 * @param imgName
 * @returns {Promise<Response>}
 */
async function deletePieceImgLocal(imgName) {
    return await fetch('/delete_img', {
        method: 'POST',
        body: JSON.stringify({
            'img_name':imgName
        })
    })
}

export function deleteImg(mode, imgName) {
    if (mode === 'production') return Promise.all([deletePieceImgFromDb(imgName)])
    else return Promise.all([deletePieceImgLocal(imgName)])
}