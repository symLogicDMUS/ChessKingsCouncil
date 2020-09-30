import {getFen} from "../game_logic/fenParser/getFen/top/getFen";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";



async function saveGameToDb(gameName, data) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
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

export function saveGame(gameName, data) {
    return Promise.all([saveGameToDb(gameName, data)]);
}