import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {MuiSelect} from "./MuiSelect";

export function MuiDropdown(props) {

    return (
        <FormControl
            variant={props.variant}
            fullWidth={props.fullWidth}
            className={props.className}
        >
            <InputLabel id={props.inputId}>{props.inputLabel}</InputLabel>
            <MuiSelect
                size={props.size}
                label={props.label}
                id={props.selectId}
                labelId={props.labelId}
                variant={props.variant}
                onFocus={props.onFocus}
                inputRef={props.inputRef}
                classes={props.classesObj}
                autoFocus={props.autoFocus}
                fullWidth={props.fullWidth}
                defaultValue={props.defaultValue}
                overrideItem={props.overrideItem}
                updateParent={props.updateParent}
                disableUnderline={props.disableUnderline}
            >
                {props.children}
            </MuiSelect>
        </FormControl>
    );
}
