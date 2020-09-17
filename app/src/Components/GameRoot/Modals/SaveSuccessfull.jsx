
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import "../css/Saving.css";

export function SaveSuccessfull({updateSpecialCase, update}) {

  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (seconds === 0) {
    updateSpecialCase("none");
    update();
  }


  return (<div className="saving-modal">
            Game Saved Successfully!
          </div>)

};
export let test = () => ReactDOM.render(<SaveSuccessfull />, document.getElementById('root'));