import {makeStyles} from "@material-ui/core/styles";
import {sqrSize} from "./ProfileWB.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    board_window: props => ({
        '@media screen and (max-width: 960px)': {
            width: '42.5vw',
            height: '42.5vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '14.333vw',
            height: '14.333vw',
        },
    }),
    board_img: props => ({
        width: '100%',
        height: '100%',
    }),
    board_grid: props => ({
        display: 'grid',
        position: 'relative',
        '@media screen and (max-width: 960px)': {
            gridTemplateColumns: 'repeat(8, 5.3125vw)',
            gridTemplateRows: 'repeat(8, 5.3125vw)',
            top: '-42.95vw',
        },
        '@media screen and (min-width: 960px)': {
            gridTemplateColumns: 'repeat(8, 1.791625vw)',
            gridTemplateRows: 'repeat(8, 1.791625vw)',
            top: '-14.6vw',
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