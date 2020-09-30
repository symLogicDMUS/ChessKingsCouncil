import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deletePieceDefFromDb(pieceName) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    return firebase.database().ref().child('defs').child(uid).child(pieceName).remove()
}


export function deleteDef(pieceName) {
    return Promise.all([deletePieceDefFromDb(pieceName)])
}