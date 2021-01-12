import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {sideBarWidth} from "./SidBar.jss";
import {drawerWidth} from "./PermanentDrawer.jss";

export const sqrSize = availHeight() * 0.1;  // for dnd context.
export const boardSize = sqrSize * 8; // for dnd context
export const bigBoardMargin = '0.25em';
export const mobileScalar = 0.68;

export const board = (fontSize) => ({
    fontSize: fontSize,
    '@media screen and (max-width: 767px)': {
        fontSize: fontSize * mobileScalar,
    },
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    lineHeight: '0',
    width: '8em',
    height: '8em',
});

export const dnd_layer = (z) => ({
    zIndex: z,
    width: boardSize,
    height: boardSize,
    position: 'absolute',
    top: `calc(55% - ${boardSize*0.5}px)`,
    left: `calc(45% - ${boardSize*0.5}px)`,
});

/**
 * the game board has different styles because is only one in drag-and-drop context.
 *
 * @param z: zIndex
 * @returns styles object
 */
export const game_board = (z) => ({
    '@media screen and (min-width: 768px)': {
        ...dnd_layer(z),
    },
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    lineHeight: '0',
});
