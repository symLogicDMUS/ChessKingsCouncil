import {makeStyles} from "@material-ui/core/styles";
import {boardSqrSize, sqrSize} from "./ProfileWBDrawer.jss";

export const useStyles = makeStyles({
    board_window: props => ({
        width: sqrSize,
        height: sqrSize,
    }),
    board_img: props => ({
        width: '100%',
        height: '100%',
    }),
    board_grid: props => ({
        display: 'grid',
        position: 'relative',
        gridTemplateColumns: `repeat(8, ${boardSqrSize})`,
        gridTemplateRows: `repeat(8, ${boardSqrSize})`,
        top: '-23.75vh',
    }),
    /* assumes position of d4*/
    piece_img: props => ({
        gridRow: 5,
        gridColumn: 4,
        width: '95%',
        height: '95%',
    }),
}, {index: 1});