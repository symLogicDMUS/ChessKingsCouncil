import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    piece_name: props => ({
        "@media screen and (max-width: 600px)": {
            fontSize: "1rem",
        },
        "@media screen and (min-width: 600px) and (max-width: 960px)": {
            fontSize: "3vw",
        },
        "@media screen and (min-width: 960px)": {
            fontSize: "1.5vw",
        },
        // flexGrow: 10,
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
}, {index: 1});