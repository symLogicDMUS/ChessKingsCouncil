import React, {useState, useEffect} from 'react';
import {AIBoard} from "./AIBoard";

export function AIDisplay({aiStart, aiDest, aiMakeMove}) {

    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (seconds === 0) {
        aiMakeMove();
    }

    return (<AIBoard aiStart={aiStart} aiDest={aiDest}/>)

}