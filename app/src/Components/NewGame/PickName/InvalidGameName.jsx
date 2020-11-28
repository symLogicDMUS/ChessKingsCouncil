import React from "react";
import ReactDOM from "react-dom";
import { useStyles } from "./InvalidGameName.jss";

export function InvalidGameName() {
    const classes = useStyles()
    return (
        <div className={classes.modal}>
            <div className={classes.window}>
                <div className={classes.heading}>{header}</div>
                <button className={classes.button} onClick={reset}>
                    Ok
                </button>
            </div>
        </div>
    );
}

export let test = () => ReactDOM.render(<InvalidGameName />, document.getElementById("root"));
