/**
 * For development only
 * @param gameName
 * @param data
 * @returns {Promise<Response>}
 */
export function saveGameLocal(gameName, data) {
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