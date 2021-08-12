import { themes } from "../../styles/themes/themes.jss";
import { makeStyles } from "@material-ui/core/styles";
import { sqrItemSizeLg, sqrItemSizeMd, sqrItemSizeSm } from "../constants.jss";

export const marginRight = {
    marginRight: "auto",
};

export const useStyles = makeStyles(
    {
        header: (props) => ({
            justifyContent: "space-between",
        }),
        buttons_area: (props) => ({
            display: "flex",
            flexDirection: "row",
            flexWrap: "no-wrap",
            alignItems: "center",
            justifyContent: "space-between",
            "@media screen and (max-width: 600px)": {
                width: sqrItemSizeSm,
            },
            "@media screen and (min-width: 600px) and (max-width: 960px)": {
                width: sqrItemSizeMd,
            },
            "@media screen and (min-width: 960px)": {
                width: sqrItemSizeLg,
            },
        }),
        button: (props) => ({
            "@media screen and (max-width: 600px)": {
                fontSize: "2.75vw",
                width: "6.15em",
                height: "2em",
                minWidth: "unset",
                // border: `0.05em solid ${themes[props.theme].outline}`,
            },
            "@media screen and (min-width: 600px) and (max-width: 960px)": {
                fontSize: "2.75vw",
                width: "6.8em",
                height: "1.95em",
                // border: `0.05em solid ${themes[props.theme].outline}`,
            },
            "@media screen and (min-width: 960px)": {
                // border: `0.05em solid ${themes[props.theme].outline}`,
                fontSize: "1vw",
                width: "6.5em",
                height: "2.1em",
            },
            border: `0.05em solid ${themes[props.theme].outline}`,
        }),

        load_button: (props) => ({
            "@media screen and (max-width: 960px)": {
                marginRight: "1.5vw",
            },
            "@media screen and (min-width: 960px)": {
                marginRight: "0.65vw",
            },
        }),
        delete_button: (props) => ({
            "@media screen and (max-width: 960px)": {
                marginLeft: "1.5vw",
            },
            "@media screen and (min-width: 960px)": {
                marginLeft: "0.65vw",
            },
        }),
        icon: (props) => ({
            minWidth: "unset",
            minHeight: "unset",
            "@media screen and (max-width: 960px)": {
                width: "2.75vw",
                height: "2.75vw",
            },
            "@media screen and (min-width: 960px)": {
                width: "1vw",
                height: "1vw",
            },
            color: themes[props.theme].text,
        }),
        delete_icon: (props) => ({
            transform: "translate(0.25em, 0)",
        }),
    },
    { index: 1 }
);
