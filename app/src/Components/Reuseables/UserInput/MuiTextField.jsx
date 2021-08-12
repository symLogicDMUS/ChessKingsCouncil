import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

export function MuiTextField(props) {
    const { className, ...other } = props;
    return (
        <Box className={className}>
            <TextField {...other} />
        </Box>
    );
}
