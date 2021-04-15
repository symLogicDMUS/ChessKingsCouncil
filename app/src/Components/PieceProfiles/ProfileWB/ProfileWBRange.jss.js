import {makeStyles} from "@material-ui/core/styles";
import {sqrItemSizeLg, sqrItemSizeMd, sqrItemSizeSm} from "../constants.jss";

export const useStyles = makeStyles({
    board_window: props => ({
        '@media screen and (max-width: 600px)': {
            width: sqrItemSizeSm,
            height: sqrItemSizeSm,
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            width: sqrItemSizeMd,
            height: sqrItemSizeMd,
        },
        '@media screen and (min-width: 960px)': {
            width: sqrItemSizeLg,
            height: sqrItemSizeLg,
        },
    }),
    board_img: props => ({
        width: '100%',
        height: '100%',
    }),
    board_grid: props => ({
        display: 'grid',
        position: 'relative',
        '@media screen and (max-width: 600px)': {
            gridTemplateColumns: 'repeat(8, 4.5625vw)',
            gridTemplateRows: 'repeat(8, 4.5625vw)',
            top: '-37.5vw',
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            gridTemplateColumns: 'repeat(8, 5vw)',
            gridTemplateRows: 'repeat(8, 5vw)',
            top: '-40.65vw',
        },
        '@media screen and (min-width: 960px)': {
            gridTemplateColumns: 'repeat(8, 1.791625vw)',
            gridTemplateRows: 'repeat(8, 1.791625vw)',
            top: '-15vw',
        },
    }),
    /* assumes position of d4*/
    piece_img: props => ({
        gridRow: 5,
        gridColumn: 4,
        width: '95%',
        height: '95%',
    }),
}, {index: 1});