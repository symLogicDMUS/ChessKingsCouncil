import React, {useState} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {useStyles} from "./Dropdown.jss"
import MenuItem from "@material-ui/core/MenuItem";

export function Dropdown({list, updateParent, overwrite, theme, style, label, inputLabel}) {

    let [selected, setSelected] = useState("")
    const classes = useStyles({style: style, theme: theme})

    const overrideItem = <MenuItem value="None"><em>None</em></MenuItem>

    const handleChange = (e) => {
        setSelected(e.target.value)
        if (updateParent) updateParent(e.target.value)
    }

    return (
        <FormControl variant="outlined" className={classes.dropdown}>
            <InputLabel id="outlined-label">{inputLabel}</InputLabel>
            <Select
                value={overwrite ? overrideItem : selected}
                onChange={handleChange}
                label={label}
                id="menu-items"
                labelId="items-label"
            >
                {list}
            </Select>
        </FormControl>
    );
}