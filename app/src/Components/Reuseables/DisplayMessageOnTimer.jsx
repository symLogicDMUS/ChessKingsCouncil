import React, { useState, useEffect } from "react";
import {TextMessage} from "./TextMessage";

export function DisplayMessageOnTimer({ methodToCallOnFinish, valueToSendOnFinish }) {
    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (seconds === 0) methodToCallOnFinish(valueToSendOnFinish);

    return (
        <TextMessage
            text="Piece Saved Successfully!"
            fontFamily='"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
            fontSize={window.screen.availHeight * 0.08}
        />
    );
}
