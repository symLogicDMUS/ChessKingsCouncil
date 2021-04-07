import React from "react";
import Switch from "@material-ui/core/Switch";
import {withStyles} from "@material-ui/core/styles";
import {themes} from "../../../styles/themes.jss";

export const ShowOffsetText = withStyles({
    switchBase: props => ({
        color: themes[props.theme].offset,
        '&$checked': {
            color: themes[props.theme].offset,
        },
        '&$checked + $track': {
            backgroundColor: themes[props.theme].offset,
        },
    }),
    checked: props => ({}),
    track: props => ({}),
})(Switch);

