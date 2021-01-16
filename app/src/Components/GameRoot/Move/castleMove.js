import { getRookStartAndDest } from "../../helpers/getRookStartAndDest";
import {rfToXy} from "../../helpers/crdCnvrt";
import { ply } from "./ply";

/**
 * if castle move, then move the rook as part of castle
 * @param gameRoot
 * @param sqrSize
 * @param boardSize
 * @param pieces
 * @param kingStart
 * @param kingDest
 * @param dispatch
 */
export function castleMove(gameRoot, sqrSize, boardSize, pieces, kingStart, kingDest, dispatch) {
    if (! gameRoot.specialMoves.isCastle([kingStart, kingDest])) {
        return;
    }

    const [rookStart, rookDest] = getRookStartAndDest(kingDest);
    let rookId = gameRoot.board[rookStart];
    let src = pieces[rookId].src
    ply(gameRoot, rookStart, rookDest);
    gameRoot.specialMoves.removeCastle([rookStart, rookDest]);
    let [rookDestX, rookDestY] = rfToXy(rookDest);
    let [rookLeft, rookTop] = [
        (rookDestX - 1) * sqrSize,
        boardSize - rookDestY * sqrSize,
    ];
    dispatch({
        type: "update",
        id: rookId,
        left: rookLeft,
        top: rookTop,
        src: src,
    });
}