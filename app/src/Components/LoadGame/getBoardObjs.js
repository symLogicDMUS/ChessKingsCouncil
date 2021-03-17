import {getBoardObj} from "./getBoardObj";

export function getBoardObjs(games) {
    let counter = 0;
    const boardObjs = {}
    for (const gameName of Object.keys(games)) {
        counter++;
        console.log('board objs counter', counter)
        boardObjs[gameName] = getBoardObj(games[gameName])
    }
    return boardObjs;
}