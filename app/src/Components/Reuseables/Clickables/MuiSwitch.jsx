import React from "react";
import clsx from "clsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStyles } from "./MuiSwitch.jss";

export function MuiSwitch({control, isChecked, className, theme, labelPlacement, children}) {
    const classes = useStyles({theme: theme});
    return (
        <div className={clsx(classes.root, {
            [className]: className})}
        >
            <FormControlLabel
                control={control}
                label={children}
                checked={isChecked}
                labelPlacement={labelPlacement}
            />
        </div>
    );
}