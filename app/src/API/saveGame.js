import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveGameToDb(gameName, data) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('games').child(uid).update({
        [gameName]: {
            'fen': data.fen,
            'img': data.img,
            'type': data.game_type,
            'pt': data.player_type,
            'status': data.status,
            'promos': data.promos,
            'json': data.json_records,
            'defs': data.piece_defs,
            'ids': data.id_dict,
            'captured': data.captured,
        }
    });
}

export function saveGame(gameName, data) {
    return Promise.all([saveGameToDb(gameName, data)]);
}

