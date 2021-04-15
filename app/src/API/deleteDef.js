import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deletePieceDefFromDb(pieceName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return firebase.database().ref().child(`defs/${uid}/${pieceName}`).remove()
}

export function deleteDef(pieceName) {
    return Promise.all([deletePieceDefFromDb(pieceName)])
}