import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import {useStyles} from "./CheckBox.jss";

/**
 * arguments
 * position: the position object includes left/top values and may include margins
*/
export function CheckBox({className, fontSize, fontFamily, clickMethod, clickValue, labelText, checkmarkState }) {
    
    const classes = useStyles({fontSize, fontFamily})

    return (
            <div className={className}>
                <div className={classes.label}>
                    {labelText}
                    <Checkbox
                        icon={<CheckBoxOutlineBlankIcon className={classes.unchecked} />}
                        checkedIcon={<CheckBoxIcon style={classes.checked} />}
                        onClick={() => clickMethod(clickValue)}
                        checked={checkmarkState}
                        name="checkedI"
                    />
                </div>
            </div>
    );
}
