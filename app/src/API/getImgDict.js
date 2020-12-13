import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function getImagesFromDb() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('images').child(uid).once('value').then( function(snapshot) {
        return snapshot.val();
    })
}

/**
 * For development only
 * @returns {Promise<Response>}
 */
async function getImagesLocal() {
    return await fetch('/get_imgs')
}

export function getImgDict(mode) {
    if (mode === 'production') return Promise.all([getImagesFromDb()])
    else return Promise.all([getImagesLocal()])
}