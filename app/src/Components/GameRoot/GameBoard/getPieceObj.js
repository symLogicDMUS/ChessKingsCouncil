import {rfToXy, xyToPx} from "./DndCrdCnvrt";
import {getPieceName} from "../../helpers/getPieceName";
import {getPieceImg} from "../../styles/themes/specialThemeImgs/getPieceImg";
import {getFranchisePieceImg} from "../../styles/themes/specialThemeImgs/getFranchisePieceImg";
import {specialThemeList} from "../../styles/themes/specialThemeImgs/specialThemeList.jss";
import {standardPieceNames} from "../../helpers/standardPieceNames";

export function getPieceObj(gameRoot, pos, id, sqrSize) {
    let [x, y] = rfToXy(pos)
    let [left, top] = xyToPx(x, y, sqrSize)
    let pieceName = getPieceName(id, gameRoot.idDict);
    let src;
    if (standardPieceNames.includes(pieceName) && specialThemeList.includes(gameRoot.state.theme)) {
        src = getFranchisePieceImg(gameRoot.state.theme, id, gameRoot.idDict)
    } else {
        src = getPieceImg(id, gameRoot.idDict, gameRoot.defs)
    }
    return {src: src, left: left, top: top}
}