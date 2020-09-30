import React from 'react'
import "./CloseIconUpload.css";


export function CloseIconUpload({closeUpload}) {
    return (
        <img src="/Images/close.svg" className="close-upload-modal-window"
             onClick={closeUpload}
             style={{position:"absolute", 
                left: "98.5%",
                width: "1.5%",                                                         
                cursor: "pointer"
              }} 
             alt="close window"/>
    )
}