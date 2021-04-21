import {makeStyles} from "@material-ui/core/styles";

const boardSizeSm = '20vw';
const boardSizeLg = '16vw';

export const useStyles = makeStyles({
    boards_area: props => ({
        float: 'left',
        marginRight: '1rem',
        display: 'flex',
        flexDirection: 'column',
    }),
    example: props => ({
        float: 'left',
        '@media screen and (max-width: 960px)': {
            width: boardSizeSm,
        },
        '@media screen and (min-width: 960px)': {
            width: boardSizeLg,
        },
    }),
    label: props => ({
        textAlign: 'center',
        width: '100%',
        fontSize: '0.75rem',
    }),
    board: props => ({
        '@media screen and (max-width: 960px)': {
            width: boardSizeSm,
            height: boardSizeSm,
        },
        '@media screen and (min-width: 960px)': {
            width: boardSizeLg,
            height: boardSizeLg,
        },
    }),
    board1: props => ({
        marginBottom: '0.8rem',
    }),
    img: props => ({
        width: '100%',
        height: '100%',
    }),
}, {index: 1});