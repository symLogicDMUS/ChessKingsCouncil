import React, {useState} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {useStyles} from "./Dropdown.jss"

export function Dropdown({list, updateParent, overwrite, theme, style, label, inputLabel}) {

    let [selected, setSelected] = useState("")

    const classes = useStyles({style: style, theme: theme})

    const handleChange = (e) => {
        setSelected(e.target.value)
        if (updateParent) updateParent(e.target.value)
    }

    if (overwrite) setSelected(overwrite)

    return (
            <FormControl variant="outlined" className={classes.dropdown}>
                <InputLabel id="outlined-label">{inputLabel}</InputLabel>
                <Select
                    label={label}
                    id="player-type"
                    labelId="play-as"
                    value={selected}
                    onChange={handleChange}
                >
                    {list}
                </Select>
            </FormControl>
    );
}