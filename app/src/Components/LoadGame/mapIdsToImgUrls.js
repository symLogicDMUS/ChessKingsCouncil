import {getPieceImg} from "../styles/themes/specialThemeImgs/getPieceImg";
import {rankfiles} from "../helpers/rankfiles";
import {standardPieceNames} from "../helpers/standardPieceNames";
import {getPieceName} from "../helpers/getPieceName";
import {specialThemeList} from "../styles/themes/specialThemeImgs/specialThemeList.jss";
import {getFranchisePieceImg} from "../styles/themes/specialThemeImgs/getFranchisePieceImg";

export function mapIdsToImgUrls(idBoard, idDict, defs, theme) {
    const board = {};
    let id, pieceName;
    for (const rf of rankfiles) {
        id = idBoard[rf];
        if (id === '#') {
            board[rf] = null;
        }
        else {
            pieceName = getPieceName(id, idDict)
            if (specialThemeList.includes(theme) && standardPieceNames.includes(pieceName)) {
                board[rf] = getFranchisePieceImg(theme, id, idDict);
            }
            else {
                board[rf] = getPieceImg(idBoard[rf], idDict, defs);
            }
        }
    }
    return board;
}