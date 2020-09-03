import { getGameNames, gameNamesApiCall } from "./getGameNames"

export async function gameDataApiCall(username, gameName) {
    let response = await fetch('/get_game', {
        method:"POST",
        body:JSON.stringify({"user":username, "game_name":gameName})
    });
    let gameData = await response.json();
    return gameData;
}

export function  getGame(username, gameName) {
    return Promise.all([gameDataApiCall(username, gameName)])
}