import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./MuiInput.jss";
import Select from "@material-ui/core/Select";

export function MuiTextField({
    id,
    size,
    theme,
    style,
    label,
    variant,
    onChange,
    genStyle,
    styleOverride,
    inputRef,
    autoFocus,
    onFocus,
    fullWidth,
    defaultValue,
    placeholder,
    autoComplete,
    InputLabelProps,
}) {
    const classes = useStyles({ style: style, genStyle: genStyle, styleOverride: styleOverride, theme: theme });

    return (
        <TextField
            id={id}
            size={size}
            onChange={onChange}
            inputRef={inputRef}
            defaultValue={defaultValue}
            placeholder={placeholder}
            autoComplete={autoComplete}
            InputLabelProps={InputLabelProps}
            className={classes.input}
            fullWidth={fullWidth}
            autoFocus={autoFocus}
            onFocus={onFocus}
            variant={variant}
            label={label}
        />
    );
}
