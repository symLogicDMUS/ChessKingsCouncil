/**
 * see ChessKingsCouncil/app/src/Reuseables/Square.jss
 * */
import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    square: props => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        "&:hover": {
            backgroundColor: themes[props.theme].sqr_hover
        },
        '@media screen and (max-width: 1040px)': {
            maxWidth: '10vh',
            maxHeight: '10vh',
        },
    }),
}, {index: 1});