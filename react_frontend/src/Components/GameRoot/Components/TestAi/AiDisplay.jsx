import React, { useState, useEffect } from 'react';
import {AiBoard} from "./AiBoard";

export function AiDisplay({aiStart, aiDest, updateAiDisplay}) {

    const [seconds, setSeconds] = useState(2);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    if (seconds === 0) {
        updateAiDisplay(false);
    }
  
  
    return <AiBoard aiStart={aiStart} aiDest={aiDest} />
  
};