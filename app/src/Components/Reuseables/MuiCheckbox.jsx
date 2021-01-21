import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Typography from "@material-ui/core/Typography";
import {FormControlLabel} from "@material-ui/core";
import {useStyles} from "./MuiCheckbox.jss";

/**
 * @param onClick
 * @param theme: string
 * @param checkmarkState
 * @param defaultChecked
 * @param rootStyle: Object
 * @param circleStyle: Object
 * @param style: Object, (style.fontSize is required)
 * @param children: string, text for form label
 * @returns {JSX.Element}
 * @constructor
 */
export function MuiCheckbox({onClick, checkmarkState, defaultChecked, style, rootStyle, circleStyle, theme, children}) {

    const classes = useStyles({style, rootStyle, circleStyle, theme})

    return (
            <FormControlLabel
                control={
                    <Checkbox
                        onClick={onClick}
                        icon={<CheckBoxOutlineBlankIcon className={classes.unchecked}/>}
                        checkedIcon={<CheckBoxIcon className={classes.checked}/>}
                        defaultChecked={defaultChecked}
                        // checked={checkmarkState}
                        name="checkbox"
                    />
                }
                className={classes.form_control_label_root}
                label={<Typography className={classes.text}>{children}</Typography>}
                labelPlacement='start'
            />
    );
}
