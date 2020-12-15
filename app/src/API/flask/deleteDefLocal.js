/**
 * for development only
 * @param pieceName
 * @returns {Promise<Response>}
 */
export async function deletePieceDefLocal(pieceName) {
    return await fetch('/delete_def', {
        method: 'POST',
        body: JSON.stringify({
            'piece_name':pieceName
        })
    })
}
