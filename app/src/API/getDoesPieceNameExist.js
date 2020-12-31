import * as firebase from "firebase";

async function getIsPieceNameInDb(pieceName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('defs').child(uid).child(pieceName).once('value').then(function (snapshot) {
        return snapshot.exists();
    });
}

export function getDoesPieceNameExist(pieceName) {
    return Promise.all([getIsPieceNameInDb(pieceName)])
}