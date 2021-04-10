import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {smLeft, smTop} from "../../CreatePiece/Board/CreatePieceBoard.jss";

export const useStyles = makeStyles({
    board: props => ({
        display: 'grid',
        '@media screen and (max-width: 960px)': {
            position: 'absolute',
            left: smLeft,
            top: smTop,
        },
        '@media screen and (min-width: 960px)': {
            outline: `0.04em solid ${themes[props.theme].outline}`
        },
    }),
}, {index: 1})