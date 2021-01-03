import React, { useState, useEffect } from "react";
import {TextMessage} from "./TextMessage";

export function DisplayMessageOnTimer({ methodToCallOnFinish, valueToSendOnFinish, children }) {
    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (seconds === 0) methodToCallOnFinish(valueToSendOnFinish);

    return (
        <div>
            {children}
        </div>
    );
}
