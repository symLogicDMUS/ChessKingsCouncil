import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deletePieceDefFromDb(pieceName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return firebase.database().ref().child('defs').child(uid).child(pieceName).remove()
}

/**
 * for development only
 * @param pieceName
 * @returns {Promise<Response>}
 */
async function deletePieceDefLocal(pieceName) {
    return await fetch('/delete_def', {
        method: 'POST',
        body: JSON.stringify({
            'piece_name':pieceName
        })
    })
}

export function deleteDef(mode, pieceName) {
    if (mode === 'production') return Promise.all([deletePieceDefFromDb(pieceName)])
    else return Promise.all([deletePieceDefLocal(pieceName)])
}