
export async function updateApiDefs(username, pieceName, pieceDef) {
    let response = await fetch('/save_def', {
        method:"POST",
        body:JSON.stringify({
            'user':username,
            'piece_name':pieceName,
            'piece_def':pieceDef
        })
    })
}

export function updateDefs(username, pieceName, pieceDef) {
    return Promise.all([updateApiDefs(username, pieceName, pieceDef)])
}