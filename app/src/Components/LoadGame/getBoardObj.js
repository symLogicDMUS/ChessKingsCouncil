import {getBoard} from "../../game_logic/fenParser/getBoard/top/getBoard";
import {mapIdsToImgUrls} from "./mapIdsToImgUrls";

export function getBoardObj(gameObj) {
    const idBoard = getBoard(gameObj.fen)
    return mapIdsToImgUrls(idBoard, gameObj.ids, gameObj.defs);
}