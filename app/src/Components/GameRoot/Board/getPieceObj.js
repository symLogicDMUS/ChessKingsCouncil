import {getPieceImg} from "../../MyPieces/getPieceImg";
import {rfToXy, xyToPx} from "./crdCnvrt";

export function getPieceObj(gameroot, posAndId, sqrSize) {
    let [x, y] = rfToXy(posAndId[0])
    let [left, top] = xyToPx(x, y, sqrSize)
    return {src: getPieceImg(posAndId[1], gameroot.idDict, gameroot.defs), left: left, top: top}
}