import React, {useState} from "react";
import {useStyles} from "./Name.jss";

export function Name({updateName}) {

    let [userInput, setUserInput] = useState('')

    const classes = useStyles()

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
        updateName(e.target.value);
    }

    return (
        <>
            <div className={classes.name}>
                <div className={classes.title}>Name</div>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleUserInput}
                    className={classes.form}
                    placeholder="Enter name of piece..."
                />
            </div>
        </>
    );
}


