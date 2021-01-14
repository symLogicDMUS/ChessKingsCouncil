import {rfToXy, xyToPx} from "../GameBoard/DndCrdCnvrt";
import {sqrSize} from "../../Reuseables/Board.jss";
import {getPieceImg} from "../../MyPieces/getPieceImg";
import {move} from "./move";

export function aiMoveComponent(gameRoot, dispatch, aiStart, aiDest) {
    let [destX, destY] = rfToXy(aiDest)
    let [destLeft, destTop] = xyToPx(destX, destY, sqrSize)
    let pieceId = gameRoot.board[aiStart]
    let src = getPieceImg(pieceId, gameRoot.idDict, gameRoot.defs)
    move(gameRoot, pieceId, aiStart, aiDest, destLeft, destTop, src, dispatch)
}