/**get dictionary of saved-game data */
export async function getDataDict(username) {
    let response = await fetch('/get_data_dict', {
        method:'POST',
        body:{"user":username}
    })
    let dataDict = await response.json();
    return dataDict
}

/**get range definitions of created pieces */
export async function getDefs(username) {
    let response = await fetch('/get_defs', {
        method:"POST",
        body:{"user":username}
    })
    let defs = await response.json();
    return defs
}

export function getData(username) {
    return Promise.all([getDataDict(username), getDefs(username)])
}

//TODO: include fetching images of pieces in api call. Store all images in MyPieces/Images. StackOverflow page on how to do this save in Edge browser.
