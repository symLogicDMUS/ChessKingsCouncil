import { getRookStartAndDest } from "../../helpers/getRookStartAndDest";
import {boardSize, sqrSize} from "../Board/snapToGrid";
import {rfToXy} from "../../helpers/crdCnvrt";
import { ply } from "./ply";

export function castleMove(gameroot, kingStart, kingDest, dispatch, src) {
    /**if castle move, then move the rook as part of castle
    parameters
    ..........
    start: tuple
    dest: tuple
    specialMoves: class specialMoves
    ..........
    note: 1 structure for ranges & pieces. Were seperate in earlier versions
    */
    
    if (! gameroot.specialMoves.isCastle([kingStart, kingDest])) {
        return;
    }
    const [rookStart, rookDest] = getRookStartAndDest(kingDest);
    let rookId = gameroot.board[rookStart];
    let [rookDestX, rookDestY] = rfToXy(rookDest);
    let [rookLeft, rookTop] = [
        rookDestX * sqrSize,
        boardSize - rookDestY * sqrSize,
    ];
    dispatch({
        type: "update",
        id: rookId,
        left: rookLeft,
        top: rookTop,
        src: src,
    });
    ply(gameroot, rookStart, rookDest);
    gameroot.specialMoves.removeCastle([rookStart, rookDest]);
}