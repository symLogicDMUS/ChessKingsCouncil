import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        buttons: (props) => ({
            float: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "1.2rem",
            marginTop: "0.5rem",
            justifyContent: "space-between",
            backgroundColor: themes[props.theme].fill,
        }),
        button1: (props) => ({
            marginBottom: "0.5rem",
        }),
        button2: (props) => ({
            marginTop: "0.5rem",
        }),
    },
    { index: 1 }
);
