import {availWidth} from "../helpers/windowMeasurments";

export const bigBoardMargin = '0.25em';

export const board = (fontSize) => ({
    fontSize: fontSize,
    width: '8em',
    height: '8em',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    lineHeight: '0',
    '@media screen and (max-width: 767px)': {
        width: availWidth() * 0.95,
        height: availWidth() * 0.95,
    },
});