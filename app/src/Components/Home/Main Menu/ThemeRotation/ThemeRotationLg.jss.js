import makeStyles from "@material-ui/core/styles/makeStyles";
import { themes } from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    (theme) => ({
        box: (props) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            left: "1rem",
            bottom: "1rem",
        }),
        spinner: (props) => ({
            color: themes[props.theme].title,
        }),
        text: (props) => ({
            color: themes[props.theme].title,
            marginLeft: "1rem",
            position: "relative",
            left: -40,
        }),
        pausePlay: (props) => ({
            color: themes[props.theme].title,
            position: "relative",
            left: -40,
            width: 40,
            height: 40,
        }),
    }),
    { index: 1 }
);
