import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const arrowHover = (theme) => ({
    backgroundColor: themes[theme].offset,
});

export const rfHover = (theme) => ({
    backgroundColor: lighten(themes[theme].sqr_hover_alt, 0.2),
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
    arrow_hover: props => ({
        '&:hover':{
            backgroundColor: themes[props.theme].offset,
        },
    }),
}, {index: 1});
/**
 * see ChessKingsCouncil/app/src/Reuseables/Square.jss for other
 * */