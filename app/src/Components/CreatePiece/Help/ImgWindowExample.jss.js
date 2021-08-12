import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        windows_area: (props) => ({
            float: "left",
            display: "flex",
            flexDirection: "column",
            marginTop: "0.25rem",
        }),
        img_window: (props) => ({
            width: 180,
            height: 180,
            borderRadius: "0.5rem",
            marginRight: "1.5rem",
            backgroundColor: themes[props.theme].fill,
            border: `0.075rem solid ${themes[props.theme].outline}`,
        }),
        window1: (props) => ({
            marginBottom: "1rem",
        }),
        img_label: (props) => ({
            fontSize: "1.5vw",
            display: "flex",
            direction: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
        }),
        icon: (props) => ({
            width: "1.2rem",
            height: "1.2rem",
            color: themes[props.theme].text,
            padding: 0,
        }),
        text: (props) => ({
            fontSize: "1.2rem",
            marginLeft: "0.15rem",
            color: themes[props.theme].text,
        }),
    },
    { index: 1 }
);
