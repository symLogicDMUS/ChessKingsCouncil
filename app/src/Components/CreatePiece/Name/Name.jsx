import React, {useState} from "react";
import {MuiTextField as TextField} from "../../Reuseables/MuiTextField";
import {fontSize} from "../fontSize.jss";
import {useStyles} from "./Name.jss";

export function Name({updateName, theme}) {

    let [userInput, setUserInput] = useState('')

    const classes = useStyles({theme: theme, fontSize: fontSize})

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
        updateName(e.target.value);
    }

    return (
        <>
            <div className={classes.name}>
                <TextField
                    value={userInput}
                    theme={theme}
                    onChange={handleUserInput}
                    style={{margin: '5%', width: '90%'}}
                    placeholder='Enter name of piece...'
                    id="game-name"
                    label="Piece Name"
                    variant="outlined"
                />
            </div>
        </>
    );
}