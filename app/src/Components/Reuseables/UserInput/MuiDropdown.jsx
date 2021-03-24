import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export function MuiDropdown(props) {
    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        setSelected(e.target.value);
        if (props.updateParent) {
            props.updateParent(e.target.value);
        }
    };

    return (
            <FormControl variant={props.variant} fullWidth={props.fullWidth} className={props.rootClassName}>
                <InputLabel id={props.inputId}>
                    {props.inputLabel}
                </InputLabel>
                <Select
                    size={props.size}
                    label={props.label}
                    id={props.selectId}
                    onChange={handleChange}
                    labelId={props.labelId}
                    variant={props.variant}
                    onFocus={props.onFocus}
                    inputRef={props.inputRef}
                    classes={props.classesObj}
                    autoFocus={props.autoFocus}
                    fullWidth={props.fullWidth}
                    defaultValue={props.defaultValue}
                    value={props.overrideItem ? props.overrideItem : selected}
                >
                    {props.children}
                </Select>
            </FormControl>
    );
}
