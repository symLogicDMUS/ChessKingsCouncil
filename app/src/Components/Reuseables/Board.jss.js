import {availHeight, availWidth, innerHeight} from "../helpers/windowMeasurments";
import {appBarHeight} from "./PersistentDrawer.jss";

export const bigBoardMargin = '0.25em';
export const mobileBoardPadding = availWidth() * 0.002;

/**
 * for dnd context
 */
export const sqrSizes = {
    desktop: availHeight() * 0.095,
    mobile: availWidth() * 0.11,
    ipx: availWidth() * 0.115,
    ipad: availWidth() * 0.105,
    short: availWidth()*0.875*0.125,
}

/**
 * for dnd context
 */
export const boardSizes = {
    desktop: sqrSizes.desktop * 8,
    mobile: sqrSizes.mobile * 8,
    ipx: sqrSizes.ipx * 8,
    ipad: sqrSizes.ipad * 8,
    short: sqrSizes.short * 8,
}

export const boardPos = {
    desktop: {
        left: availWidth() * 0.45 - boardSizes.desktop * 0.5,
        top: availHeight()*0.47 - boardSizes.desktop * 0.5,
    },
    mobile: {
        left: availWidth()*0.06,
        top: appBarHeight,
    },
    ipx: {
        left: availWidth()*0.04,
        top: appBarHeight + availWidth()*0.011,
    },
    ipad: {
      left: availWidth() * 0.5 - (sqrSizes.ipad * 8)*0.5,
      top: appBarHeight,
    },
    short: {
        left: availWidth()*0.06,
        top: appBarHeight,
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
    '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
        top: boardPos.ipx.top,
        left: boardPos.ipx.left,
    },
    "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 6/10) and (max-aspect-ratio: 7/10)": {
        top: boardPos.mobile.top,
        left: boardPos.mobile.left,
    },
    '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)':{
        top: boardPos.ipad.top,
        left: boardPos.ipad.left,
    },
    /*shortest phones*/
    "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 7/10) and (max-aspect-ratio: 1/1)":{
        top: boardPos.short.top,
        left: boardPos.short.left,
    },
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
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
