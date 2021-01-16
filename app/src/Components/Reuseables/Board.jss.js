import {availHeight} from "../helpers/windowMeasurments";

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

export const bigBoardMargin = '0.25em';

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
        position: 'absolute',
        top: `calc(55% - ${boardSize * 0.5}px)`,
        left: `calc(45% - ${boardSize * 0.5}px)`,
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
