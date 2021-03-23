import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

export function MuiTextField(props) {

    return (
        <Box className={props.rootClassName}>
            <TextField
                id={props.id}
                size={props.size}
                onChange={props.onChange}
                inputRef={props.inputRef}
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
                InputLabelProps={props.InputLabelProps}
                classes={props.classesObj}
                fullWidth={props.fullWidth}
                autoFocus={props.autoFocus}
                onFocus={props.onFocus}
                variant={props.variant}
                label={props.label}
                disabled={props.disabled}
            />
        </Box>
    );
}
