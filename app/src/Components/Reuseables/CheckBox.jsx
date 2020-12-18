import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import {useStyles} from "./CheckBox.jss";

export function CheckBox({clickMethod, clickValue, labelText, checkmarkState, style, theme}) {

    const classes = useStyles({style, theme})

    return (
        <div className={classes.text}>
            {labelText}
            <Checkbox
                icon={<CheckBoxOutlineBlankIcon className={classes.unchecked}/>}
                checkedIcon={<CheckBoxIcon className={classes.checked}/>}
                onClick={() => clickMethod(clickValue)}
                checked={checkmarkState}
                name="checkbox"
            />
        </div>
    );
}
