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
            classes={props.classesObj}
            className={clsx(classes.form_control_label_root, {
                [props.className]: props.className,
                [props.rootClassName]: props.rootClassName,
                [props.addedClassName]: props.addedClassName,
            })}
            label={
                <Typography
                    className={clsx(classes.text, {
                        [props.className]: props.className,
                        [props.addedClassName]: props.addedClassName,
                        [props.textClassName]: props.textClassName,
                    })}
                    variant={props.variant}
                    noWrap={props.noWrap}
                >
                    {props.children}
                </Typography>
            }
            labelPlacement="start"
            control={
                <Checkbox
                    onClick={props.onClick}
                    icon={
                        <CheckBoxOutlineBlankIcon
                            className={clsx(classes.checkbox, {
                                [props.className]: props.className,
                                [props.addedClassName]: props.addedClassName,
                                [props.checkboxClassName]: props.checkboxClassName,
                            })}
                        />
                    }
                    checkedIcon={
                        <CheckBoxIcon
                            className={clsx(classes.checkbox, {
                                [props.className]: props.className,
                                [props.addedClassName]: props.addedClassName,
                                [props.checkboxClassName]: props.checkboxClassName,
                            })}
                        />
                    }
                    checked={props.checkmarkState}
                    defaultChecked={props.defaultChecked}
                    name="checkbox"
                />
            }
        />
    );
}
