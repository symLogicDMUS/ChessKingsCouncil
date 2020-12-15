import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./MuiInput.jss";

export function MuiTextField({ value, onChange, theme, style, fullWidth, id, label, variant, placeholder }) {
    const classes = useStyles({ style: style, theme: theme });
    return (
        <TextField
            value={value}
            onChange={onChange}
            className={classes.input}
            fullWidth={fullWidth}
            placeholder={placeholder}
            variant={variant}
            label={label}
            id={id}
        />
    );
}
