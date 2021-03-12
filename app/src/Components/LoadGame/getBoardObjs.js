import {getBoardObj} from "./getBoardObj";

export function getBoardObjs(games) {
    const boardObjs = {}
    for (const gameName of Object.keys(games)) {
        boardObjs[gameName] = getBoardObj(games[gameName])
    }
    return boardObjs;
}