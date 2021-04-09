import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {rfToGridLoc} from "../../helpers/crdCnvrt";
import {sqrSize} from "./CreatePieceBoard.jss";

export const pieceLocHover = (theme) => ({
    backgroundColor: lighten(themes[theme].dark_in_range, 0.08),
});

export const useStyles = makeStyles({
    square: props => ({
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
        ...rfToGridLoc(props.rf),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 0,
    }),
}, {index: 1});
/**
 * see ChessKingsCouncil/app/src/Reuseables/Square.jss for other
 * */