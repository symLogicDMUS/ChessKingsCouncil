import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Typography from "@material-ui/core/Typography";
import {FormControlLabel} from "@material-ui/core";
import {useStyles} from "./CheckBox.jss";

export function CheckBox({clickMethod, clickValue, labelText, checkmarkState, style, rootStyle, theme}) {

    const classes = useStyles({style, rootStyle, theme})

    return (
        <FormControlLabel
            control={
                <Checkbox
                    icon={<CheckBoxOutlineBlankIcon className={classes.unchecked}/>}
                    checkedIcon={<CheckBoxIcon className={classes.checked}/>}
                    onClick={() => clickMethod(clickValue)}
                    checked={checkmarkState}
                    name="checkbox"
                />
            }
            className={classes.checkbox_root}
            label={<Typography className={classes.text}>{labelText}</Typography>}
            labelPlacement='start'
        />
    );
}
