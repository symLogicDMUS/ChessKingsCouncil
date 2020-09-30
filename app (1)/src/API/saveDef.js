import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {gameDefsOffsetListsToStrs} from "../apiHelpers/gameDefsOffsetListsToStrs"


async function savePieceDefToDb(pieceName, pieceDef) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var pieceDefObj = gameDefsOffsetListsToStrs({[pieceName]: pieceDef})
    return await firebase.database().ref().child('defs').child(uid).update(pieceDefObj)
}

export function saveDef(pieceName, pieceDef) {
    return Promise.all([savePieceDefToDb(pieceName, pieceDef)])
}