import {lighten, makeStyles} from "@material-ui/core/styles";
import {rfToGridLoc} from "../../helpers/crdCnvrt";
import {themes} from "../../styles/themes.jss";
import {sqrSize} from "../../CreatePiece/Board/CreatePieceBoard.jss";

export const useStyles = makeStyles({
    square: props => ({
        zIndex: 2,
        ...rfToGridLoc(props.rf),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        '@media screen and (max-width: 960px)': {
            width: sqrSize.thin,
            height: sqrSize.thin,
        },
        '@media screen and (min-width: 960px)': {
            width: sqrSize.wide,
            height: sqrSize.wide,
        },
        "& .MuiTouchRipple-root": {
            color: themes[props.theme].sqr_text,
        },
        maxWidth: '11vh',
        maxHeight: '11vh',
        minWidth: 'unset',
        minHeight: 'unset',
        backgroundColor: themes[props.theme].dark_in_range,
    }),
    text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '3vw',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '3.5vw',
        },
        margin: 'auto',
        color: lighten(themes[props.theme].dark_in_range, 0.5),
    }),
}, {index: 1});