import {availHeight, availWidth} from "../helpers/windowMeasurments";

export const largeBoardFontSizeDesktop = window.screen.availHeight * 0.095;
export const largeBoardFontSizeMobile = window.screen.availHeight * 0.066;
export const smallBoardFontSizeDesktop = largeBoardFontSizeDesktop * 0.501;

/**
 * for dnd context
 */
export const sqrSizes = {
    desktop: availHeight() * 0.1,
    mobile: availHeight() * 0.068,
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
        top: availHeight()*0.5 - boardSizes.desktop * 0.5,
    },
    mobile: { //TODO: implement
        left: null,
        top: null,
    }
}

export const bigBoardMargin = '0.25em';
export const gameBoardLeft = availWidth() * 0.45 - boardSizes.desktop * 0.5

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
    '@media screen and (min-width: 768px)': {
        position: 'fixed',
        top: boardPos.desktop.top,
        left: boardPos.desktop.left,
    },
    '@media screen and (max-width: 767px)': {
        position: 'fixed',
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
