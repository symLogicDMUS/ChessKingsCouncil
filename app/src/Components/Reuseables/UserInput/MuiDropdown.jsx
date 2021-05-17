import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {MuiSelect} from "./MuiSelect";

export function MuiDropdown(props) {
    const {
        variant,
        fullWidth,
        className,
        inputLabel,
        children,
        ...other
    } = props;

    return (
        <FormControl
            variant={props.variant}
            fullWidth={props.fullWidth}
            className={props.className}
        >
            <InputLabel>{props.inputLabel}</InputLabel>
            <MuiSelect
                {...other}
            >
                {props.children}
            </MuiSelect>
        </FormControl>
    );
}
