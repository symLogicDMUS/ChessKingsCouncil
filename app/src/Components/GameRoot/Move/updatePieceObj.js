import {rfToXy} from "../../helpers/crdCnvrt";
import {boardSize, sqrSize} from "../GameBoard/DropLayer.jss";

export function updatePieceObj(gameRoot, start, dest, dispatch) {
    let id = gameRoot.board[start];
    let [destX, destY] = rfToXy(dest);
    let [left, top] = [
        destX * sqrSize,
        boardSize - destY * sqrSize,
    ];
    dispatch({
        type: "update",
        id: gameRoot.board[start],
        left: left,
        top: top,
        title: state[id].title,
    });
}