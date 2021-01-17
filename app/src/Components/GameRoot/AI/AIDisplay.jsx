import React, {useState, useEffect} from 'react';
import {AIBoard} from "./AIBoard";
import {sqrSize} from "../../Reuseables/Board.jss";

export function AIDisplay({aiStart, aiDest, aiMoveComponent, setAiDisplay, sqrSize, boardSize, theme}) {

    const [seconds, setSeconds] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (seconds === 0) {
        setAiDisplay(false)
        aiMoveComponent(aiStart, aiDest, sqrSize);
    }

    return (<AIBoard theme={theme} sqrSize={sqrSize} boardSize={boardSize} aiStart={aiStart} aiDest={aiDest}/>)

}
