import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {gameDefsOffsetListsToStrs} from "../apiHelpers/gameDefsOffsetListsToStrs"


async function savePieceDefToDb(username, pieceName, pieceDef) {
    var pieceDefObj = gameDefsOffsetListsToStrs({[pieceName]: pieceDef})
    return await firebase.database().ref().child('defs').child(username).update(pieceDefObj)
}

export function saveDef(username, pieceName, pieceDef) {
    return Promise.all([savePieceDefToDb(username, pieceName, pieceDef)])
}