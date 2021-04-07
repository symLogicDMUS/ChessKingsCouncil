import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const pieceLocHover = (theme) => ({
    backgroundColor: lighten(themes[theme].dark_in_range, 0.08),
});

export const useStyles = makeStyles({
    square: props => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        '@media screen and (max-width: 960px)': {
            maxWidth: '11vh',
            maxHeight: '11vh',
        },
    }),
}, {index: 1});
/**
 * see ChessKingsCouncil/app/src/Reuseables/Square.jss for other
 * */