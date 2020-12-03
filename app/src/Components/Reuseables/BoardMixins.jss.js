import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {navBarHeight} from "../NavBar/NavBarStyle";
import {getSqrPosPx} from "../helpers/getSqrPosPx";
import {binaryBoard} from "../helpers/binaryBoard";
import {rfToGridLoc} from "../helpers/crdCnvrt";

export const boardTop = () => navBarHeight * 1.5

export const boardSize = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return availHeight() * 0.8;
        case 'mobile':
            return availHeight() * 0.9;
        default:
            break;
    }
    return null;
}

export const sqrSize = (screenCase) => boardSize(screenCase) * 0.125;

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
    zIndex: 1,
    ...rfToGridLoc(rf),
    "@media screen and (min-device-width: 768px)": {
        height: sqrSize('desktop'),
        width: sqrSize('desktop'),
    },
    "@media screen and (max-device-width: 767px)": {
        height: sqrSize('mobile'),
        width: sqrSize('mobile'),
    },
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
export const board = {
    position: 'absolute',
    display: 'grid',
    lineHeight: 0,
    "@media screen and (min-device-width: 768px)": {
        top: boardTop(),
        left: availWidth() * 0.4,
        gridTemplateColumns: `repeat(8, ${sqrSize('desktop')})`,
        gridTemplateRows: `repeat(8, ${sqrSize('desktop')})`,
    },
}