
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

export function Success({setSaveStatus}) {

  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (seconds === 0)
    setSaveStatus("reset");

  return (<div style={{
    position: "absolute",
    zIndex:"3",
    width: "100%",
    height: "100%"
  }}>
            <div style={{
            position:"absolute",
            zIndex:"3", 
            fontSize:"50px",
            fontFamily:"Tahoma",
            color:"#72e2ff", 
            left: "20%", 
            top:"40%"}}>Piece saved successfully!</div>
          </div>)

};
export let test = () => ReactDOM.render(<Success />, document.getElementById('root'));