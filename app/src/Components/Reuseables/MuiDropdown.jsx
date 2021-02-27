import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "./MuiInput.jss";

export function MuiDropdown({
    list,
    theme,
    label,
    size,
    style,
    genStyle,
    styleOverride,
    classesObj,
    fullWidth,
    inputLabel,
    variant,
    inputId,
    selectId,
    labelId,
    overrideItem,
    defaultValue,
    updateParent,
    onFocus,
    autoFocus,
    inputRef
}) {
    let [selected, setSelected] = useState("");
    const classes = useStyles({
        style: style,
        genStyle: genStyle,
        styleOverride: styleOverride,
        theme: theme,
    });

    const handleChange = (e) => {
        setSelected(e.target.value);
        if (updateParent) updateParent(e.target.value);
    };

    return (
        <FormControl variant={variant} className={classes.input} fullWidth={fullWidth}>
            <InputLabel id={inputId}>
                {inputLabel}
            </InputLabel>
            <Select
                onFocus={onFocus}
                inputRef={inputRef}
                onChange={handleChange}
                className={classes.field}
                classes={classesObj}
                value={overrideItem ? overrideItem : selected}
                size={size}
                label={label}
                id={selectId}
                labelId={labelId}
                variant={variant}
                fullWidth={fullWidth}
                defaultValue={defaultValue}
                autoFocus={autoFocus}
            >
                {list}
            </Select>
        </FormControl>
    );
}
