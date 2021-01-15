import React, {useState, useEffect} from 'react';
import {AIBoard} from "./AIBoard";

export function AIDisplay({aiStart, aiDest, aiMoveComponent, setAiDisplay, theme}) {

    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (seconds === 0) {
        setAiDisplay(false)
        aiMoveComponent(aiStart, aiDest);
    }

    return (<AIBoard theme={theme} aiStart={aiStart} aiDest={aiDest}/>)

}
