import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {gameDefsOffsetListsToStrs} from "../apiHelpers/gameDefsOffsetListsToStrs"


async function savePieceDefToDb(pieceName, pieceDef) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const pieceDefObj = gameDefsOffsetListsToStrs({[pieceName]: pieceDef});
    return await firebase.database().ref().child('defs').child(uid).update(pieceDefObj)
}

/**
 * For development only
 * @param pieceName
 * @param pieceDef
 * @returns {Promise<Response>}
 */
export async function saveDefLocal(pieceName, pieceDef) {
    return await fetch('/save_def', {
        method: 'POST',
        body: JSON.stringify({
            'piece_name': pieceName,
            'piece_def': pieceDef
        })
    })
}

export function saveDef(mode, pieceName, pieceDef) {
    if (mode === 'production') return Promise.all([savePieceDefToDb(pieceName, pieceDef)])
    else return Promise.all([saveDefLocal(pieceName, pieceDef)])
}