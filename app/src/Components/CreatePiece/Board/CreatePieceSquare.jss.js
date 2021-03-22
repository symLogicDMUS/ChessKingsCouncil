/**
 * see ChessKingsCouncil/app/src/Reuseables/Square.jss
 * */
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    square: props => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        '@media screen and (max-width: 1040px)': {
            maxWidth: '11vh',
            maxHeight: '11vh',
        },
    }),
    on_hover: props => ({
        '&:hover': {
            backgroundColor: themes[props.theme].sqr_hover
        },
    }),
}, {index: 1});