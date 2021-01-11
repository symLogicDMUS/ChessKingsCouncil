import {rfToXy} from "../../helpers/crdCnvrt";
import {boardSize, sqrSize} from "../GameBoard/DropLayer.jss";

export function updatePieceObj(gameroot, start, dest, dispatch) {
    let id = gameroot.board[start];
    let [destX, destY] = rfToXy(dest);
    let [left, top] = [
        destX * sqrSize,
        boardSize - destY * sqrSize,
    ];
    dispatch({
        type: "update",
        id: gameroot.board[start],
        left: left,
        top: top,
        title: state[id].title,
    });
}