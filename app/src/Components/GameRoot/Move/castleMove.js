import { getRookStartAndDest } from "../../helpers/getRookStartAndDest";
import {boardSize, sqrSize} from "../../Reuseables/Board.jss";
import {rfToXy} from "../../helpers/crdCnvrt";
import { ply } from "./ply";

export function castleMove(gameRoot, kingStart, kingDest, dispatch, src) {
    /**if castle move, then move the rook as part of castle
    parameters
    ..........
    start: tuple
    dest: tuple
    specialMoves: class specialMoves
    ..........
    note: 1 structure for ranges & pieces. Were seperate in earlier versions
    */
    
    if (! gameRoot.specialMoves.isCastle([kingStart, kingDest])) {
        return;
    }
    const [rookStart, rookDest] = getRookStartAndDest(kingDest);
    let rookId = gameRoot.board[rookStart];
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
    ply(gameRoot, rookStart, rookDest);
    gameRoot.specialMoves.removeCastle([rookStart, rookDest]);
}