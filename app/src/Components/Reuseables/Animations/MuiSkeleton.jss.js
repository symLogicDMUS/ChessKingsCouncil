import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        row: (props) => ({
            fontSize: "2vh",
            marginBottom: "5.5em",
        }),
        load_box_container: (props) => ({
            fontSize: "2vh",
            width: "10em",
            height: "10em",
            marginRight: "3em",
        }),
        load_box: (props) => ({
            fontSize: "2vh",
            width: "10em",
            height: "10em",
            borderRadius: "0.35em",
            backgroundColor: themes[props.theme].even_row,
        }),
        underline: (props) => ({
            fontSize: "2vh",
            width: "10em",
            height: "2em",
            backgroundColor: themes[props.theme].even_row,
        }),
    },
    { index: 1 }
);
