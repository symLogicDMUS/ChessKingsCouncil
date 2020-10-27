import React, { useState, useEffect } from 'react';
import {AiBoard} from "./AiBoard";

export function AiDisplay({aiStart, aiDest, aiMakeMove, theme}) {

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
  
    return (<AiBoard aiStart={aiStart} aiDest={aiDest} theme={theme} />)
  
};