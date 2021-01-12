import {rfToXy, xyToPx} from "../GameBoard/DndCrdCnvrt";
import {sqrSize} from "../../Reuseables/Board.jss";
import {getPieceImg} from "../../MyPieces/getPieceImg";
import {move} from "./move";

export function aiMoveComponent(gameroot, dispatch, aiStart, aiDest) {
    let [destX, destY] = rfToXy(aiDest)
    let [destLeft, destTop] = xyToPx(destX, destY, sqrSize)
    let pieceId = gameroot.board[aiStart]
    let src = getPieceImg(pieceId, gameroot.idDict, gameroot.defs)
    move(gameroot, pieceId, aiStart, aiDest, destLeft, destTop, src, dispatch)
}