import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveGameToDb(gameName, data) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`games/${uid}`).update({
        [gameName]: {
            'fen': data.fen,
            'type': data.type,
            'pt': data.pt,
            'status': data.status,
            'promos': data.promos,
            'json': data.json,
            'defs': data.defs,
            'ids': data.ids,
            'captured': data.captured,
            'imgUrlStrs': data.imgUrlStrs,
        }
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}

export function saveGame(gameName, data) {
    return Promise.all([saveGameToDb(gameName, data)]);
}

