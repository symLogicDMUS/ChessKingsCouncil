import {getPieceImg} from "../../API/sampleData/specialThemeImgs/getPieceImg";
import {rankfiles} from "../helpers/rankfiles";

export function mapIdsToImgUrls(idBoard, idDict, defs) {
    const board = {}
    for (const rf of rankfiles) {
        if (idBoard[rf] === '#') {
            board[rf] = null;
        }
        else {
            board[rf] = getPieceImg(idBoard[rf], idDict, defs)
        }
    }
    return board;
}