import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deletePieceDefFromDb(username, pieceName) {
    return firebase.database().ref().child('defs').child(username).child(pieceName).remove()
}


export function deleteDef(username, pieceName) {
    return Promise.all([deletePieceDefFromDb(username, pieceName)])
}