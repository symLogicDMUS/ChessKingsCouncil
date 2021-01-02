import React, {useState} from "react";
import {MuiTextField as TextField} from "../../Reuseables/MuiTextField";
import {fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./Name.jss";

export function Name({updateName, theme, defaultValue}) {

    const classes = useStyles({theme: theme, fontSize: fontSize})

    const handleInput = (e) => {
        updateName(e.target.value)
    };

    return (
        <>
            <div className={classes.name}>
                <TextField
                    onChange={handleInput}
                    defaultValue={defaultValue}
                    style={{width: '100%'}}
                    placeholder='Enter name of piece...'
                    id="game-name"
                    label="Piece Name"
                    variant="outlined"
                    theme={theme}
                />
            </div>
        </>
    );
}