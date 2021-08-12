import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { lgScreenItemWidth, marginBottom } from "../GameRoot.jss";

export const useStyles = makeStyles(
    {
        flexbox: (props) => ({
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "flex-end",
            width: lgScreenItemWidth,
            marginBottom: marginBottom,
            borderTop: `0.05rem solid ${themes[props.theme].outline}`,
            borderBottom: `0.05rem solid ${themes[props.theme].outline}`,
        }),
        caption: (props) => ({
            flexGrow: 2,
            fontSize: "1.1rem",
            textAlign: "center",
            transform: "translate(-0.5em, 0)",
            color: themes[props.theme].text,
            fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        }),
        cell: (props) => ({
            "@media screen and (max-width: 960px)": {
                height: "4vh",
                display: "flex",
                flexDirection: "column",
            },
            "@media screen and (min-width: 960px)": {
                fontSize: "0.9rem",
            },
            color: themes[props.theme].text,
            fontFamily: "Roboto-Light, Roboto",
        }),
        col1: (props) => ({
            width: "50%",
            flexGrow: 1,
            paddingLeft: "0.5rem",
        }),
        col2: (props) => ({
            width: "50%",
            flexGrow: 1,
            textAlign: "right",
            paddingRight: "0.5rem",
        }),
        text: (props) => ({
            fontSize: "1rem",
            marginTop: "auto",
        }),
    },
    { index: 1 }
);
