import React, {useState} from "react";
import {MuiTextField as TextField} from "../../Reuseables/MuiTextField";
import {gen_style, text_field_style, useStyles} from "./Name.jss";

export function Name({updateName, theme, defaultValue, screenCase}) {
    const [name, setName] = useState("");
    const classes = useStyles({theme: theme})

    const handleInput = (e) => {
        setName(e.target.value)
    };


    return (
        <div className={classes.name} onMouseLeave={() => updateName(name)}>
            <TextField
                onChange={handleInput}
                genStyle={gen_style()}
                defaultValue={defaultValue}
                style={text_field_style(screenCase)}
                placeholder='Enter name of piece...'
                label="Piece Name"
                autoComplete="off"
                variant="outlined"
                id="game-name"
                theme={theme}
            />
        </div>
    );
}


