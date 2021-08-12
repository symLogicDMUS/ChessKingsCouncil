import React from "react";
import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Typography from "@material-ui/core/Typography";
import { FormControlLabel } from "@material-ui/core";
import { useStyles } from "./MuiCheckbox.jss";

export function MuiCheckbox(props) {
    const {
        onClick,
        className,
        textClassName,
        checkboxClassName,
        checkmarkState,
        defaultChecked,
        classesObj,
        variant,
        noWrap,
        theme,
        children,
    } = props;

    const classes = useStyles({
        theme: theme,
    });

    return (
        <FormControlLabel
            classes={classesObj}
            className={clsx(classes.root, {
                [className]: className,
            })}
            label={
                <Typography
                    className={clsx(classes.text, {
                        [textClassName]: textClassName,
                    })}
                    variant={variant}
                    noWrap={noWrap}
                >
                    {children}
                </Typography>
            }
            labelPlacement="start"
            control={
                <Checkbox
                    onClick={onClick}
                    icon={
                        <CheckBoxOutlineBlankIcon
                            className={clsx(classes.checkbox, {
                                [checkboxClassName]: checkboxClassName,
                            })}
                        />
                    }
                    checkedIcon={
                        <CheckBoxIcon
                            className={clsx(classes.checkbox, {
                                [checkboxClassName]: checkboxClassName,
                            })}
                        />
                    }
                    checked={checkmarkState}
                    defaultChecked={defaultChecked}
                    name="checkbox"
                />
            }
        />
    );
}
