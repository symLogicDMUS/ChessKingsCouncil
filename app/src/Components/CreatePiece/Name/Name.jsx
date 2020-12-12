import React, {useState} from "react";
import {MuiTextField as TextField} from "../../Reuseables/MuiTextField";
import {useStyles, text_field} from "./Name.jss";
import {fontSize} from "../em.jss";


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
                    style={text_field(fontSize)}
                    theme={theme}
                    onChange={handleUserInput}
                    placeholder={'Enter name of piece...'}
                    id="game-name"
                    label="Piece Name"
                    variant="outlined"
                />
            </div>
        </>
    );
}