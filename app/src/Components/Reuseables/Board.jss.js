import {availHeight, availWidth, viewHeight, viewWidth} from "../helpers/windowMeasurments";
import {appBarHeight} from "./PersistentDrawer.jss";

export const getSqrSizeMobile = () => {
    if (viewHeight() >= viewWidth()*2) {
        return availWidth()*0.95*0.125
    }
    else {
        return viewHeight()*0.5*0.125
    }
};

export const getBoardSizeMobile = () => {
    return getSqrSizeMobile()*8;
};

/**
 * for dnd context
 */
export const sqrSizes = {
    desktop: availHeight() * 0.095,
    mobile: getSqrSizeMobile(),
}

/**
 * for dnd context
 */
export const boardSizes = {
    desktop: sqrSizes.desktop * 8,
    mobile: sqrSizes.mobile * 8,
}

export const boardPos = {
    desktop: {
        left: availWidth() * 0.45 - boardSizes.desktop * 0.5,
        top: availHeight()*0.47 - boardSizes.desktop * 0.5,
    },
    mobile: {
        left: availWidth()*0.5 - getBoardSizeMobile()*0.5,
        top: appBarHeight*1.1,
    },
}

export const board = (fontSize) => ({
    fontSize: fontSize,
    display: 'grid',
});

export const dnd_layer = (boardSize, z) => ({
    zIndex: z,
    width: boardSize,
    height: boardSize,
    position: 'fixed',
    '@media screen and (max-device-width: 1040px)': {
        top: boardPos.mobile.top,
        left: boardPos.mobile.left,
    },
    '@media screen and (min-device-width: 1040px)': {
        top: boardPos.desktop.top,
        left: boardPos.desktop.left,
    },
});

/**
 * the game board has different styles because is only one in drag-and-drop context.
 * @param boardSize
 * @param z: zIndex
 * @returns styles object
 */
export const game_board = (boardSize, z) => ({
    ...dnd_layer(boardSize, z),
    display: 'grid',
});
