import { setStartingPieces } from "./setStartingPieces";
import { viewWidth } from "../../helpers/windowMeasurments";
import { getSqrSize } from "./getSqrSize";
import { getBoardPos } from "./getBoardPos";

export const updateOnResize = (gameRoot, theme) => {
    let { sqrSizeLg, sqrSizeSm } = getSqrSize();
    let currentSqrSize;
    if (viewWidth() > 960) {
        currentSqrSize = sqrSizeLg;
    } else {
        currentSqrSize = sqrSizeSm;
    }
    return {
        pieces: setStartingPieces(gameRoot, currentSqrSize, theme),
        sqrSizes: {
            wide: sqrSizeLg,
            thin: sqrSizeSm,
        },
        boardSizes: {
            wide: sqrSizeLg * 8,
            thin: sqrSizeSm * 8,
        },
        boardPos: getBoardPos(),
    };
};
