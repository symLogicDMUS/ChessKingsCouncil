import { getBoardPos } from "../GameBoard/getBoardPos";
import { getSqrSize } from "../GameBoard/getSqrSize";
import { viewWidth } from "../../helpers/windowMeasurments";

export const getPosLeft = () => {
    const boardPos = getBoardPos();
    const { sqrSizeLg, sqrSizeSm } = getSqrSize();
    if (viewWidth() > 960) {
        return boardPos.wide + sqrSizeLg * 3;
    }
    return boardPos.thin + sqrSizeSm * 3;
};
