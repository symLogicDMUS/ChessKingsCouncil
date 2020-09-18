import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deletePieceDefFromDb(username, pieceName) {
    firebase.database().ref().child('defs').child(username).delete() //look up how to, make sure deleting correctly.
}


export function deleteDef(username, pieceName) {
    return Promise.all([deletePieceDefFromDb(username, pieceName)])
}