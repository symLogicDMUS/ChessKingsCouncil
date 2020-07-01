/**get dictionary of saved-game data */
export async function getDataDict() {
    let response = await fetch('/get_data_dict')
    let dataDict = await response.json();
    return dataDict
}

/**get range definitions of created pieces */
export async function getDefs() {
    let response = await fetch('/get_defs')
    let defs = await response.json();
    return defs
}

export function getData() {
    return Promise.all([getDataDict(), getDefs()])
}

//TODO: include fetching images of pieces in api call. Store all images in MyPieces/Images. StackOverflow page on how to do this save in Edge browser.
