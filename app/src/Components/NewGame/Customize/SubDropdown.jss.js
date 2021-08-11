import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        seeMore: (props) => ({
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "center",
        }),
        piece_icon: (props) => ({
            color: themes[props.theme].text,
            height: "1.5rem",
            width: "1.5rem",
        }),
        list_text: (props) => ({
            fontSize: "1.25rem",
            marginLeft: "0.75rem",
            color: themes[props.theme].text,
        }),
        expand: (props) => ({
            color: themes[props.theme].text,
        }),
        title: (props) => ({
            "@media screen and (max-width: 600px)": {
                fontSize: "1.1rem",
            },
            "@media screen and (min-width: 600px) and (max-width: 960px)": {
                fontSize: "3vw",
                lineHeight: "2.75rem",
            },
            "@media screen and (min-width: 960px)": {
                fontSize: "1.5vw",
                lineHeight: "2.75rem",
            },
            color: themes[props.theme].text,
            fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        }),
        caption: (props) => ({
            maxWidth: 250,
            fontSize: "1rem",
            pointerEvents: "none",
            marginBottom: "0.35rem",
            color: themes[props.theme].text,
            fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        }),
    },
    { index: 1 }
);
