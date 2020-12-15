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