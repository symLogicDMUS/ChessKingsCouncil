import React from "react";
import ReactDOM from "react-dom";
import {styles} from "./ConfirmOverwrite.jss";

export function ConfirmOverwrite({name, save, setSaveStatus}) {

    const classes = useStyles()

    return (
        <div className={classes.window}>
            <div className={classes.label1}>A piece named</div>
            <div className={classes.piece_name}>"{name}"</div>
            <div className={classes.label2}>already exists. do you want to replace it?</div>
            <div className={classes.yes_button} onClick={() => save()}>
                Yes
            </div>
            <div className={classes.no_button} onClick={() => setSaveStatus("none")}>
                No
            </div>
        </div>
    );
}

