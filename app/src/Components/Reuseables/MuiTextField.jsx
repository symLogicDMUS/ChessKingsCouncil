import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./MuiInput.jss";

export function MuiTextField({
    id,
    theme,
    style,
    label,
    variant,
    onChange,
    genStyle,
    inputRef,
    autoFocus,
    fullWidth,
    defaultValue,
    autoComplete,
}) {
    const classes = useStyles({ style: style, genStyle: genStyle, theme: theme });

    return (
        <TextField
            onChange={onChange}
            inputRef={inputRef}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            className={classes.input}
            fullWidth={fullWidth}
            autoFocus={autoFocus}
            variant={variant}
            label={label}
            id={id}
        />
    );
}
