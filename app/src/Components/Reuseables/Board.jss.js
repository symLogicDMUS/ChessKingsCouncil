import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {appBarHeight} from "./PersistentDrawer.jss";

export const bigBoardMargin = '0.25em';
export const mobileBoardPadding = availWidth() * 0.002;

/**
 * for dnd context
 */
export const sqrSizes = {
    desktop: availHeight() * 0.095,
    mobile: availWidth() * 0.12125,
    ipx: availWidth() * 0.12125,
}

/**
 * for dnd context
 */
export const boardSizes = {
    desktop: sqrSizes.desktop * 8,
    mobile: sqrSizes.mobile * 8,
    ipx: sqrSizes.ipx * 8
}

export const boardPos = {
    desktop: {
        left: availWidth() * 0.45 - boardSizes.desktop * 0.5,
        top: availHeight()*0.5 - boardSizes.desktop * 0.5,
    },
    mobile: {
        left: availWidth()*0.015,
        top: appBarHeight + availWidth()*0.016,
    },
    ipx: {
        left: availWidth()*0.01,
        top: appBarHeight + availWidth()*0.011,
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
    '@media (min-aspect-ratio: 16/9)': {
        position: 'fixed',
        top: boardPos.desktop.top,
        left: boardPos.desktop.left,
    },
    '@media (max-aspect-ratio: 1/1)': {
        position: 'fixed',
        top: boardPos.mobile.top,
        left: boardPos.mobile.left,
    },
    "@media (max-aspect-ratio: 1/2)": {
        position: 'fixed',
        top: boardPos.ipx.top,
        left: boardPos.ipx.left,
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
