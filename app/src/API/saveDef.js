import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {gameDefsOffsetListsToStrs}
from "./apiHelpers/gameDefsOffsetListsToStrs";

async function savePieceDefToDb(pieceName, pieceDef) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const pieceDefObj = gameDefsOffsetListsToStrs({[pieceName]: pieceDef});
    return await firebase.database().ref().child(`defs/${uid}`).update(pieceDefObj)
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}

export function saveDef(pieceName, pieceDef) {
    return Promise.all([savePieceDefToDb(pieceName, pieceDef)])
}