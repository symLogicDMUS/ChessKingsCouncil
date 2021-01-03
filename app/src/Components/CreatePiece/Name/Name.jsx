import React, {useState} from "react";
import {ClickAwayListener} from "@material-ui/core";
import {MuiTextField as TextField} from "../../Reuseables/MuiTextField";
import {fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./Name.jss";

export function Name({inputRef, updateName, updateNameFinish, theme, defaultValue}) {

    const classes = useStyles({theme: theme, fontSize: fontSize})

    const handleInput = (e) => {
        updateName(e.target.value)
    };

    return (
        <div className={classes.name} onMouseLeave={updateNameFinish}>
            <TextField
                inputRef={inputRef}
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
    );
}