import React, {useState} from "react";
import {useStyles} from "./SaveAs.jss";

export function SaveAs({changeName, update, save, toggleSaveAs}) {

    const classes = useStyles()

    let [gameName, setGameName] = useState('')


    const handleUserInput = (e) => {
        setGameName(e.target.value)
    }

    const acceptName = () => {
        changeName(gameName);
        save();
        toggleSaveAs(false);
    }

    render()
    {
        return (
            <div className={classes.modal}>
                <div className={classes.window}>
                    <div className={classes.label}>
                        Save As...
                    </div>
                    <input type="text" value={gameName} onChange={handleUserInput}
                           className={classes.form} placeholder="enter name of game..."/>
                    <div className={classes.ok} onClick={acceptName}>
                        Ok
                    </div>
                    <div className={classes.cancel} onClick={() => toggleSaveAs(false)}>
                        Cancel
                    </div>
                </div>
            </div>
        )
    }
}