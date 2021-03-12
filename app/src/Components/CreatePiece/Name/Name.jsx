import React, {useState} from "react";
import {MuiTextField as TextField} from "../../Reuseables/UserInput/MuiTextField";
import {useStyles} from "./Name.jss";

export function Name({updateName, theme, defaultValue, screenCase}) {
    const classes = useStyles({theme: theme})

    const handleInput = (e) => {
        updateName(e.target.value)
    };

    let size = 'small';
    if (screenCase === 'desktop') {
        size = 'medium';
    }

    return (
        <div className={classes.name}>
            <TextField
                size={size}
                theme={theme}
                fullWidth={true}
                label='Piece Name'
                autoComplete="off"
                autoFocus={true}
                variant="outlined"
                id="game-name"
                onChange={handleInput}
                defaultValue={defaultValue}
            />
        </div>
    );
}