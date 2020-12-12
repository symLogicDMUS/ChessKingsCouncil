import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./MuiInput.jss";

export function MuiTextField({ value, onChange, theme, style, id, label, variant, placeholder }) {
    const classes = useStyles({ style: style, theme: theme });

    return (
        <TextField
            value={value}
            className={classes.input}
            onChange={onChange}
            id={id}
            label={label}
            placeholder={placeholder}
            variant={variant}
        />
    );
}
