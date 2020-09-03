
export async function gameNamesApiCall(username) {
    let response = await fetch('/get_game_names', {
        method:"POST",
        body: JSON.stringify({"user":username})
    })
    let gameNames = await response.json();
    return gameNames;
}

export function getGameNames(username) {
    return Promise.all([gameNamesApiCall(username)]);
}