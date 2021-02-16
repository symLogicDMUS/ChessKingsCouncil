import {availHeight, availWidth} from "../helpers/windowMeasurments";
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
    ipad: availWidth() * 0.105
}

/**
 * for dnd context
 */
export const boardSizes = {
    desktop: sqrSizes.desktop * 8,
    mobile: sqrSizes.mobile * 8,
    ipx: sqrSizes.ipx * 8,
    ipad: sqrSizes.ipad * 8,
}

export const boardPos = {
    desktop: {
        left: availWidth() * 0.45 - boardSizes.desktop * 0.5,
        top: availHeight()*0.47 - boardSizes.desktop * 0.5,
    },
    mobile: {
        left: availWidth()*0.06,
        top: appBarHeight + availWidth()*0.016,
    },
    ipx: {
        left: availWidth()*0.04,
        top: appBarHeight + availWidth()*0.011,
    },
    ipad: {
      left: availWidth() * 0.5 - (sqrSizes.ipad * 8)*0.5,
      top: appBarHeight + availHeight() * 0.02,
    }
}

export const board = (fontSize) => ({
    fontSize: fontSize,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    lineHeight: '0',
    width: '8em',
    height: '8em',
});

export const dnd_layer = (boardSize, z) => ({
    zIndex: z,
    width: boardSize,
    height: boardSize,
    position: 'fixed',
    '@media (max-aspect-ratio: 6/10)': {
        top: boardPos.ipx.top,
        left: boardPos.ipx.left,
        outline: '1px dashed red',
    },
    "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
        top: boardPos.mobile.top,
        left: boardPos.mobile.left,
        outline: '1px dashed green',
    },
    '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
        top: boardPos.ipad.top,
        left: boardPos.ipad.left,
        outline: '1px dashed blue',
    },
    '@media (min-aspect-ratio: 1001/1000)': {
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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    lineHeight: '0',
});
