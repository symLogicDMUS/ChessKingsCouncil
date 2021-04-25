import React from "react";
import Switch from "@material-ui/core/Switch";
import {withStyles} from "@material-ui/core/styles";
import {themes} from "../../../styles/themes/themes.jss";

export const ShowSpanText = withStyles({
    switchBase: props => ({
        color: themes[props.theme].span,
        '&$checked': {
            color: themes[props.theme].span,
        },
        '&$checked + $track': {
            backgroundColor: themes[props.theme].span,
        },
    }),
    checked: props => ({}),
    track: props => ({}),
})(Switch);

