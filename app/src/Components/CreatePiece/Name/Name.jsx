import React from "react";
import {MuiTextField as TextField} from "../../Reuseables/MuiTextField";
import {text_field_style, useStyles} from "./Name.jss";

export function Name({inputRef, updateName, updateNameFinish, theme, defaultValue}) {

    const classes = useStyles({theme: theme})

    const handleInput = (e) => {
        updateName(e.target.value)
    };

    return (
        <div className={classes.name} onMouseLeave={updateNameFinish}>
            <TextField
                inputRef={inputRef}
                onChange={handleInput}
                defaultValue={defaultValue}
                genStyle={{width: '100%'}}
                style={text_field_style}
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


