import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./MuiInput.jss";

export function Dropdown({
    list,
    updateParent,
    overwrite,
    theme,
    style,
    label,
    inputLabel,
    variant,
    inputId,
    selectId,
    labelId,
}) {
    let [selected, setSelected] = useState("");
    const classes = useStyles({ style: style, theme: theme });

    const overrideItem = (
        <MenuItem value="None">
            <em>None</em>
        </MenuItem>
    );

    const handleChange = (e) => {
        setSelected(e.target.value);
        if (updateParent) updateParent(e.target.value);
    };

    return (
        <FormControl variant={variant} className={classes.input}>
            <InputLabel id={inputId}>{inputLabel}</InputLabel>
            <Select
                value={overwrite ? overrideItem : selected}
                onChange={handleChange}
                label={label}
                id={selectId}
                labelId={labelId}
                variant={variant}
            >
                {list}
            </Select>
        </FormControl>
    );
}
