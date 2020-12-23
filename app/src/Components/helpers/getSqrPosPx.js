import {rfToXy} from "./crdCnvrt";
import {boardSize, gameBoardTop, sqrSize} from "../Reuseables/Board.jss";

export function getSqrPosPx (rf, screenCase) {
    let [x, y] = rfToXy(rf);
    let left = (x - 1) * sqrSize(screenCase);
    let top = gameBoardTop() - y * sqrSize(screenCase);
    return {left: left, top: top}
}