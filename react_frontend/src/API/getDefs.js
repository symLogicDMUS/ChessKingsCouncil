/**get range definitions of created pieces */
export async function defsApiCall(username) {
    let response = await fetch('/get_defs', {
        method:"POST",
        body:JSON.stringify({"user":username})
    })
    let defs = await response.json();
    return defs
}

export function getDefs(username) {
    return Promise.all([defsApiCall(username)])
}
//