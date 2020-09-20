import {getFen} from "../game_logic/fenParser/getFen/top/getFen";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";



async function saveGameToDb(username, gameName, data) {

    return await firebase.database().ref().child('games').child(username).update({ [gameName]: {
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

export function saveGame(username, gameName, data) {
    return Promise.all([saveGameToDb(username, gameName, data)]);
}