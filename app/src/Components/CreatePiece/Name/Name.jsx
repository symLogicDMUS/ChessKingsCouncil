import React, {useState} from "react";
import {MuiTextField as TextField} from "../../Reuseables/MuiTextField";
import {useStyles} from "./Name.jss";

export function Name({updateName, theme, defaultValue, screenCase}) {
    const [name, setName] = useState("");
    const classes = useStyles({theme: theme})

    const handleInput = (e) => {
        setName(e.target.value)
    };

    let size = 'small';
    if (screenCase === 'desktop') {
        size = 'medium';
    }

    return (
        <div className={classes.name} onMouseLeave={() => updateName(name)}>
            <TextField
                onChange={handleInput}
                size={size}
                theme={theme}
                fullWidth={true}
                label='Piece Name'
                defaultValue={defaultValue}
                autoComplete="off"
                variant="outlined"
                id="game-name"
            />
        </div>
    );
}