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
    onFocus,
    fullWidth,
    defaultValue,
    autoComplete,
}) {
    const classes = useStyles({ style: style, genStyle: genStyle, theme: theme });
    const [border, setBorder] = useState(false);
    const updateBorder = () => (
        setBorder(! border)
    );

    return (
        <TextField
            onChange={onChange}
            inputRef={inputRef}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            className={classes.input}
            fullWidth={fullWidth}
            autoFocus={autoFocus}
            onFocus={onFocus}
            variant={variant}
            label={label}
            id={id}
            style={border ? {border: '2px dashed red'} : null}
        />
    );
}
