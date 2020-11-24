import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {styles} from "./Success.jss";

export function Success({ setSaveStatus }) {
    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (seconds === 0) setSaveStatus("none");

    return (
        <div className={classes.success_message_container}>
            <div className={classes.success_message}>Piece saved successfully!</div>
        </div>
    );
}
export let test = () => ReactDOM.render(<Success />, document.getElementById("root"));
