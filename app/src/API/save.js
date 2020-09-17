import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveToDb(data) {
    var fen = getFen(mapRfToXy(data['board']))
    fen = getFullFen(fen, fenObj)
    var gameName = data['game_name']
    return await firebase.database().ref().child('games').child(data['username']).update({gameName: {
        'fen': fen,
        'type': data['game_type'],
        'pt': data['player_type'],
        'status': data['status'],
        'promos': data['promos'],
        'json': data['json_records'],
        'defs': data['defs'],
        'ids': data['id_dict']
    }})
}

export function save(data) {
    return Promise.all([saveToDb(data)])
}