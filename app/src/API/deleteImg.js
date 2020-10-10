import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deletePieceImgFromDb(imgName) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    return firebase.database().ref().child('images').child(uid).child(imgName).remove()
}

export function deleteImg(imgName) {
    return Promise.all([deletePieceImgFromDb(imgName)])
}