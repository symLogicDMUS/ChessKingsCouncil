import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useStyles } from "./MuiInput.jss";

export function Dropdown({
    list,
    theme,
    label,
    size,
    style,
    genStyle,
    styleOverride,
    classesObj,
    inputLabel,
    variant,
    inputId,
    selectId,
    labelId,
    overwrite,
    updateParent,
    onFocus,
}) {
    let [selected, setSelected] = useState("");
    const classes = useStyles({
        style: style,
        genStyle: genStyle,
        styleOverride: styleOverride,
        theme: theme,
    });

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
            <InputLabel id={inputId}>
                {inputLabel}
            </InputLabel>
            <Select
                onFocus={onFocus}
                onChange={handleChange}
                className={classes.field}
                classes={classesObj}
                value={overwrite ? overrideItem : selected}
                size={size}
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
