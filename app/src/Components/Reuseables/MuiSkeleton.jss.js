import { makeStyles } from "@material-ui/core/styles";
import {fontSize002} from "../styles/fontSizes.jss";
import {themes} from "../styles/themes.jss";
import Box from "@material-ui/core/Box";
import React from "react";

export const useStyles = makeStyles({
    row: props => ({
        fontSize: fontSize002,
        marginBottom: '5.5em',
    }),
    load_box_container: props => ({
        fontSize: fontSize002,
        width: '10em',
        height: '10em',
        marginRight: '3em',
    }),
    load_box: props => ({
        fontSize: fontSize002,
        width: '10em',
        height: '10em',
        borderRadius: '0.35em',
        backgroundColor: themes[props.theme].even_row
    }),
    underline: props => ({
        fontSize: fontSize002,
        width: '10em',
        height: '2em',
        backgroundColor: themes[props.theme].even_row
    }),
});