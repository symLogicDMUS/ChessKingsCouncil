import React from "react";
import {getOffset} from "../../../helpers/getOffset";
import "./offset.css";

export function getOffsetLabel(offset) {

    let xSign = null;
    let ySign = null;
    
    if (offset[0] === 0 && offset[1] == 0) {
        return <div>{null}</div>;
    }

    if (offset[0] < 0)
        xSign = "-"
    else
        xSign = "+"

    if (offset[1] < 0)
        ySign = "-"
    else
        ySign = "+"

    let offsetLabel = [
            
      <div class="x-offset">
        <svg viewBox="0 0 40 20">
        <text x="0" y="20" textLength="40px">x {xSign} {Math.abs(offset[0])}</text>
        </svg>
      </div>,

      <div class="divider"></div>,

      <div class="y-offset">
        <svg viewBox="0 0 40 30" >
          <text x="0" y="20" textLength="40px">y {ySign} {Math.abs(offset[1])}</text>
        </svg>
      </div>
    ];

    return offsetLabel;
}

