/**
 * For development only
 * @param gameName
 * @returns {Promise<Response>}
 */
export async function deleteGameLocal(gameName) {
    return await fetch('/delete_game', {
        method: 'POST',
        body: JSON.stringify({
            'game_name':gameName
        })
    })
}
