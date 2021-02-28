import {rfToXy, xyToPx} from "./DndCrdCnvrt";
import {getPieceImg} from "../../MyPieces/getPieceImg";
import {specialThemeList} from "../../styles/themes.jss";
import {getFranchisePieceImg} from "../../MyPieces/getFranchisePieceImg";

export function getPieceObj(gameRoot, posAndId, sqrSize) {
    let [x, y] = rfToXy(posAndId[0])
    let [left, top] = xyToPx(x, y, sqrSize)
    let src;
    if (gameRoot.gameType === 'Standard' && specialThemeList.includes(gameRoot.state.theme)) {
        src = getFranchisePieceImg(gameRoot.state.theme, posAndId[1], gameRoot.idDict)
    } else {
        src = getPieceImg(posAndId[1], gameRoot.idDict, gameRoot.defs)
    }
    return {src: src, left: left, top: top}
}