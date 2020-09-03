/**get dictionary of saved-game data */
export async function dataDictApiCall(username) {
    let response = await fetch('/get_data_dict', {
        method:"POST",
        body:JSON.stringify({"user":username})
    })
    let dataDict = await response.json();
    return dataDict
}

export function getDataDict(username) {
    return Promise.all([getDataDict(username)]);
}
//