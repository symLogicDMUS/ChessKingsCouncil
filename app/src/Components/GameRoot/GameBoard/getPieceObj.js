import {getPieceImg} from "../../MyPieces/getPieceImg";
import {rfToXy, xyToPx} from "./DndCrdCnvrt";

export function getPieceObj(gameRoot, posAndId, sqrSize) {
    let [x, y] = rfToXy(posAndId[0])
    let [left, top] = xyToPx(x, y, sqrSize)
    return {src: getPieceImg(posAndId[1], gameRoot.idDict, gameRoot.defs), left: left, top: top}
}