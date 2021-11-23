import makeStyles from "@material-ui/core/styles/makeStyles";
import {appBarHeight} from "../../../Reuseables/Drawers/ResponsiveDrawer.jss";

const color = {
    light: "#fff",
    dark: "#90caf9",
    tan_dark: "#d7bb99",
    NBA: "#fff",
    star_wars: "#f6b601",
    mechwarrior_a_team: "#ff981a",
};

export const useStyles = makeStyles(
    (theme) => ({
        box: (props) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: -30,
            top: appBarHeight + 24,
        }),
        spinner: (props) => ({
            color: color[props.theme],
        }),
        text: (props) => ({
            color: color[props.theme],
            marginLeft: "1rem",
            position: "relative",
            left: -40,
        }),
        pausePlay: (props) => ({
            color: color[props.theme],
            position: "relative",
            left: -40,
            width: 40,
            height: 40,
        }),
    }),
    { index: 1 }
);
