import React from "react";
import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Typography from "@material-ui/core/Typography";
import { FormControlLabel } from "@material-ui/core";
import { useStyles } from "./MuiCheckbox.jss";

/**
 * @param onClick
 * @param theme: string
 * @param checkmarkState
 * @param defaultChecked
 * @param rootStyle: Object
 * @param classProp
 * @param textVariant: string
 * @param classesObj: Object
 * @param style: Object, (style.fontSize is required)
 * @param children: string, text for form label
 * @returns {JSX.Element}
 * @constructor
 */
export function MuiCheckbox({
    onClick,
    checkmarkState,
    defaultChecked,
    theme,
    classesObj,
    textVariant,
    classProp,
    addedClassProp,
    rootClassProp,
    textClassProp,
    checkboxClassProp,
    children,
}) {
    const classes = useStyles({
        theme,
    });

    return (
        <FormControlLabel
            control={
                <Checkbox
                    onClick={onClick}
                    icon={
                        <CheckBoxOutlineBlankIcon
                            className={clsx(classes.unchecked, {
                                [classProp]: classProp,
                                [addedClassProp]: addedClassProp,
                                [checkboxClassProp]: checkboxClassProp,
                            })}
                        />
                    }
                    checkedIcon={
                        <CheckBoxIcon
                            className={clsx(classes.checked, {
                                [classProp]: classProp,
                                [addedClassProp]: addedClassProp,
                                [checkboxClassProp]: checkboxClassProp,
                            })}
                        />
                    }
                    checked={checkmarkState}
                    defaultChecked={defaultChecked}
                    name="checkbox"
                />
            }
            classes={classesObj}
            className={clsx(classes.form_control_label_root, {
                [classProp]: classProp,
                [addedClassProp]: addedClassProp,
                [rootClassProp]: rootClassProp,
            })}
            label={
                <Typography
                    className={clsx(classes.text, {
                        [classProp]: classProp,
                        [addedClassProp]: addedClassProp,
                        [textClassProp]: textClassProp,
                    })}
                    variant={textVariant}
                >
                    {children}
                </Typography>
            }
            labelPlacement="start"
        />
    );
}
