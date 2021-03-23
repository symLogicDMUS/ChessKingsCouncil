import React from "react";
import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Typography from "@material-ui/core/Typography";
import { FormControlLabel } from "@material-ui/core";
import { useStyles } from "./MuiCheckbox.jss";


export function MuiCheckbox(props) {
    const classes = useStyles({
        theme: props.theme,
    });

    return (
        <FormControlLabel
            control={
                <Checkbox
                    onClick={props.onClick}
                    icon={
                        <CheckBoxOutlineBlankIcon
                            className={clsx(classes.unchecked, {
                                [props.classProp]: props.classProp,
                                [props.addedClassProp]: props.addedClassProp,
                                [props.checkboxClassProp]: props.checkboxClassProp,
                            })}
                        />
                    }
                    checkedIcon={
                        <CheckBoxIcon
                            className={clsx(classes.checked, {
                                [props.classProp]: props.classProp,
                                [props.addedClassProp]: props.addedClassProp,
                                [props.checkboxClassProp]: props.checkboxClassProp,
                            })}
                        />
                    }
                    checked={props.checkmarkState}
                    defaultChecked={props.defaultChecked}
                    name="checkbox"
                />
            }
            classes={props.classesObj}
            className={clsx(classes.form_control_label_root, {
                [props.classProp]: props.classProp,
                [props.addedClassProp]: props.addedClassProp,
                [props.rootClassProp]: props.rootClassProp,
            })}
            label={
                <Typography
                    className={clsx(classes.text, {
                        [props.classProp]: props.classProp,
                        [props.addedClassProp]: props.addedClassProp,
                        [props.textClassProp]: props.textClassProp,
                    })}
                    variant={props.textVariant}
                >
                    {props.children}
                </Typography>
            }
            labelPlacement="start"
        />
    );
}
