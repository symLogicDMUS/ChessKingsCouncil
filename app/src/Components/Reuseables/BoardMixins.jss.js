import {availHeight, availWidth, centerOfScreenX, centerOfScreenY} from "../helpers/windowMeasurments";
import {navBarHeight} from "../NavBar/NavBarStyle";
import {getSqrPosPx} from "../helpers/getSqrPosPx";
import {binaryBoard} from "../helpers/binaryBoard";
import {rfToGridLoc} from "../helpers/crdCnvrt";

export const gameBoardTop = (screenCase) => centerOfScreenY() - boardSize(screenCase, 'large')*0.5
export const gameBoardLeft = (screenCase) => centerOfScreenX() -  boardSize(screenCase, 'large')*0.5

export const boardSize = (screenCase, boardType) => {
    /**
     * boardType:
     *      large: CreatePiece and GameRoot
     *      medium: RangeDisplayBoard
     *      small: DisplayBoardModal
     */
    switch (boardType) {
        case 'large':
            switch (screenCase) {
                case 'desktop': return availHeight() * 0.7;
                case 'mobile': return availHeight() * 0.9;
                default: return;
            }
        case 'medium':
            switch (screenCase) {
                case 'desktop': return availHeight() * 0.2;
                case 'mobile': return availHeight() * 0.2;
                default: return;
            }
        case 'small':
            switch (screenCase) {
                case 'desktop': return availHeight() * 0.10;
                case 'mobile': return availHeight() * 0.10;
                default: return;
            }
        default: break;
    }
    return null;
}

export const sqrSize = (screenCase, boardType) => boardSize(screenCase, boardType) * 0.125;

export function getRangeSqrClass(rf, condition, classes) {
    if (condition) {
        if (binaryBoard[rf]) return classes.light_in_range
        else return classes.dark_in_range
    } else {
        if (binaryBoard[rf]) return classes.light_normal
        else return classes.dark_normal
    }
}

export function getInteractiveSqrClass(rf, condition, classes) {
    if (condition) {
        if (binaryBoard[rf]) return classes.light_in_range
        else return classes.dark_in_range
    } else {
        return classes.none
    }
}

export const square = (rf) => ({
    zIndex: 'inherit',
    ...rfToGridLoc(rf),
});
export const dark_normal = (rf) => ({
    ...square(rf),
    backgroundColor: "#008000",
});
export const light_normal = (rf) => ({
    ...square(rf),
    backgroundColor: "#ffffff",
});
export const dark_in_range = (rf) => ({
    ...square(rf),
    backgroundColor: "#fdfd35",
});
export const light_in_range = (rf) => ({
    ...square(rf),
    backgroundColor: "#ddff00",
});
export const none = (rf) => ({
    ...square(rf),
});
export const board = (boardType) => ({
    position: 'absolute',
    display: 'grid',
    lineHeight: 0,
    "@media screen and (min-device-width: 768px)": {
        gridTemplateColumns: `repeat(8, ${sqrSize('desktop', boardType)}px)`,
        gridTemplateRows: `repeat(8, ${sqrSize('desktop', boardType)}px)`,
    },
})