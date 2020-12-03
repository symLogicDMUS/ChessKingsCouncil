import {rfToXy} from "./crdCnvrt";
import {boardSize, boardTop, sqrSize} from "../Reuseables/BoardMixins.jss";

export function getSqrPosPx (rf, screenCase) {
    let [x, y] = rfToXy(rf);
    let left = (x - 1) * sqrSize(screenCase);
    let top = boardTop() - y * sqrSize(screenCase);
    return {left: left, top: top}
}