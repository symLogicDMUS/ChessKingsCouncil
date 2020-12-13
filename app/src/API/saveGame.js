import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveGameToDb(gameName, data) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('games').child(uid).update({ [gameName]: {
        'fen': data['fen'],
        'type': data['game_type'],
        'pt': data['player_type'],
        'status': data['status'],
        'promos': data['promos'],
        'json': data['json_records'],
        'defs': data['piece_defs'],
        'ids': data['id_dict']
    }});
}

/**
 * For development only
 * @param gameName
 * @param data
 * @returns {Promise<Response>}
 */
function saveGameLocal(gameName, data) {
    return fetch('/save_game', {
        method: "POST",
        body: JSON.stringify({
            "game_name": gameName,
            "game_data":{
                'fen': data['fen'],
                'type': data['game_type'],
                'pt': data['player_type'],
                'status': data['status'],
                'promos': data['promos'],
                'json': data['json_records'],
                'defs': data['piece_defs'],
                'ids': data['id_dict']
            }
        })
    })
}

export function saveGame(mode, gameName, data) {
    if (mode === 'production') return Promise.all([saveGameToDb(gameName, data)]);
    else return Promise.all([saveGameLocal(gameName, data)])
}

