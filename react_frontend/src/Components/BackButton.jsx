import React from "react";
import { useHistory } from "react-router-dom";

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button style={{position:"absolute", left:"180px", top:"21px", color:"white", backgroundColor:"black"}} 
           onClick={() => history.goBack()}>Back</button>
        </>
    );
};