import React, {useState} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {useStyles} from "./Dropdown.jss"

export function Dropdown({list, updateParent, overwrite, theme, styles}) {

    let [selected, setSelected] = useState("")

    const classes = useStyles({styles: styles, theme: theme})

    const handleChange = (e) => {
        setSelected(e.target.value)
        if (updateParent) updateParent(e.target.value)
    }

    if (overwrite) setSelected(overwrite)

    return (
            <FormControl variant="outlined" className={classes.dropdown}>
                <InputLabel id="outlined-label">Play As</InputLabel>
                <Select
                    label="Play As"
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