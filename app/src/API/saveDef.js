import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function savePieceDefToDb(username, pieceName, pieceDef) {
    var [pieceName, pieceDef] = offsetStrsToList({pieceName, pieceDef})
    return await firebase.database().ref().child('defs').child(username).update({pieceName, pieceDef})
}

export function saveDef(username, pieceName, pieceDef) {
    return Promise.all([savePieceDefToDb(username, pieceName, pieceDef)])
}