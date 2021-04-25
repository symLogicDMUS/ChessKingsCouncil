import React from "react";
import Switch from "@material-ui/core/Switch";
import {lighten, withStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const ShowProfileOnClick = withStyles({
    switchBase: props => ({
        color: themes[props.theme].text,
        '&$checked': {
            color: themes[props.theme].text,
        },
        '&$checked + $track': {
            backgroundColor: lighten(themes[props.theme].text, 0.25),
        },
    }),
    checked: props => ({}),
    track: props => ({}),
})(Switch);

