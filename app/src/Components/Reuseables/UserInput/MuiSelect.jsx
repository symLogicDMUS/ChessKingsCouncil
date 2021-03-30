import React, {useState} from "react";
import Select from "@material-ui/core/Select";

export function MuiSelect(props) {
    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        setSelected(e.target.value);
        if (props.updateParent) {
            props.updateParent(e.target.value);
        }
    };

    return (
        <Select
            id={props.id}
            size={props.size}
            label={props.label}
            onChange={handleChange}
            labelId={props.labelId}
            variant={props.variant}
            onFocus={props.onFocus}
            classes={props.classes}
            inputRef={props.inputRef}
            autoFocus={props.autoFocus}
            fullWidth={props.fullWidth}
            defaultValue={props.defaultValue}
            value={props.overrideItem ? props.overrideItem : selected}
            disableUnderline={props.disableUnderline}
        >
            {props.children}
        </Select>
    );
}