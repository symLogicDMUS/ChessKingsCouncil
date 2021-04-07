import React from "react";
import clsx from "clsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStyles } from "./MuiSwitch.jss";

export function MuiSwitch({control, className, theme, labelPlacement, children}) {
    const classes = useStyles({theme: theme});
    return (
        <FormControlLabel
            control={control}
            label={children}
            className={clsx(classes.root, {
                [className]: className,
            })}
            labelPlacement={labelPlacement}
        />
    );
}