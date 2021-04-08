import {makeStyles} from "@material-ui/core/styles";
import {smLeft, smTop} from "../../CreatePiece/Board/CreatePieceBoard.jss";

export const locSqrEnter = {zIndex: 1};

export const useStyles = makeStyles({
    board: props => ({
        zIndex: 1,
        width: '84vw',
        height: '84vw',
        maxWidth: '88vh',
        maxHeight: '88vh',
        position: 'absolute',
        left: smLeft,
        top: smTop,
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 12.5%)',
        gridTemplateRows: 'repeat(8, 12.5%)',
    }),
}, {index: 1});
