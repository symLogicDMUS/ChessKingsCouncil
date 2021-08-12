import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    (theme) => ({
        window: (props) => ({
            "@media screen and (max-width: 960px)": {
                width: "100vw",
            },
            "@media screen and (min-width: 960px)": {
                width: "90vw",
                margin: "auto",
                borderRadius: "1rem",
            },
            zIndex: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0.1rem",
            paddingTop: "1rem",
            border: `0.08rem solid ${themes[props.theme].odd_row}`,
            backgroundColor: themes[props.theme].fill,
        }),
        item_choices: (props) => ({
            "@media screen and (max-width: 960px)": {
                width: "95vw",
                height: "80vh",
                padding: "2.5vw",
                paddingLeft: "3.5vw",
            },
            "@media screen and (min-width: 960px)": {
                width: "85.5vw",
                height: "65vh",
            },
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            alignContent: "flex-start",
            justifyContent: "flex-start",
            overflow: "scroll",
            borderRadius: "0.015em",
            border: `0.002em solid ${themes[props.theme].outline}`,
            backgroundColor: themes[props.theme].modal_fill,
        }),
        bottom_area: (props) => ({
            display: "flex",
            flexDirection: "row",
            "@media screen and (max-width: 960px)": {
                flexGrow: 2,
                width: "95vw",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingTop: "1.2rem",
                paddingBottom: "1.2rem",
            },
            "@media screen and (min-width: 960px)": {
                width: "85.5vw",
                paddingTop: "1vw",
                paddingBottom: "1vw",
                alignItems: "center",
                justifyContent: "flex-start",
            },
            flexGrow: 3,
        }),
        bottom_button: (props) => ({
            "@media screen and (max-width: 600px)": {
                fontSize: "2.75vw",
                width: "6.15em",
                height: "2em",
                border: `0.05em solid ${themes[props.theme].outline}`,
            },
            "@media screen and (min-width: 600px) and (max-width: 960px)": {
                fontSize: "2.75vw",
                width: "6.8em",
                height: "1.95em",
                border: `0.05em solid ${themes[props.theme].outline}`,
            },
            "@media screen and (min-width: 960px)": {
                border: `0.05em solid ${themes[props.theme].outline}`,
                fontSize: "1vw",
                width: "6.5em",
                height: "2.1em",
            },
        }),
        ok_button: (props) => ({
            "@media screen and (max-width: 960px)": {
                marginRight: "3.5vw",
            },
            "@media screen and (min-width: 960px)": {
                marginRight: "2vw",
            },
        }),
        icon: (props) => ({
            "@media screen and (max-width: 600px)": {
                fontSize: "1vw",
            },
            "@media screen and (min-width: 600px) and (max-width: 960px)": {
                fontSize: "1vw",
            },
            "@media screen and (min-width: 960px)": {
                fontSize: "1vw",
            },
            width: "0.9em",
            height: "0.9em",
        }),
        close_icon: (props) => ({
            fontSize: "1.5vw",
            width: "1.5em",
            height: "1.5em",
        }),
        show_names_gen: (props) => ({
            "@media screen and (max-width: 600px)": {
                fontSize: "2.75vw",
            },
            "@media screen and (min-width: 600px) and (max-width: 960px)": {
                fontSize: "2.75vw",
            },
            "@media screen and (min-width: 960px)": {
                fontSize: "1vw",
            },
        }),
        show_names_checkbox: (props) => ({
            "@media screen and (max-width: 600px)": {
                fontSize: "2.75vw",
            },
            "@media screen and (min-width: 600px) and (max-width: 960px)": {
                fontSize: "2.75vw",
            },
            "@media screen and (min-width: 960px)": {
                fontSize: "1vw",
            },
            width: "1.25em",
            height: "1.25em",
        }),
    }),
    { index: 1 }
);
