import React from "react";
import {rankfiles} from "../../../helpers/rankfiles";
import {getPosPx} from "../../../helpers/getPosPx";
import "./AiBoard.css";

export function AiBoard({aiStart, aiDest}) {

    let squares = [];
    for (var rf of rankfiles) {
        if (rf === aiStart) {
            squares.push(
                <div style={getPosPx(rf, 75, 600)}>
                    <img src="/Images/sqr-outline-ec2525.svg" style={{position:"absolute", width:75, height:75}} alt="ai start square"/>
                </div>
            )
        }
        else if (rf === aiDest) {
            squares.push(
                <div style={getPosPx(rf, 75, 600)}>
                    <img src="/Images/sqr-highlight-fdfd35.svg" style={{position:"absolute", width:75, height:75}} alt="ai destination square"/>
                </div>
            )
        }
        else {
            squares.push(
                <div style={getPosPx(rf, 75, 600)}>
                    {null}
                </div>
            )
        }
    }

}