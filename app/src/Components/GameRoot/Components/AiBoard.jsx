import React from "react";
import {rankfiles} from "../../helpers/rankfiles";
import {getPosPx} from "../../helpers/getPosPx";
import "./AiBoard.css";

export function AiBoard({aiStart, aiDest}) {

    const getBoard = () => {

        let squares = [];
        let pxPos = null;
        for (var rf of rankfiles) {

            pxPos = getPosPx(rf, 75, 600);
            pxPos['position'] = "absolute";

            if (rf === aiStart) {
                squares.push(
                    <div style={pxPos}>
                        <img src="/Images/sqr-outline-fdfd35.svg" style={{position:"absolute", width:75, height:75}} alt="ai start square"/>
                    </div>
                )
            }
            else if (rf === aiDest) {
                squares.push(
                    <div style={pxPos}>
                        <img src="/Images/sqr-highlight-fdfd35.svg" style={{position:"absolute", width:75, height:75}} alt="ai destination square"/>
                    </div>
                )
            }
            else {
                squares.push(
                    <div style={pxPos}>
                        {null}
                    </div>
                )
            }
        }

        return squares;
    }

    return (
        <div className="ai-board">
            {getBoard()}
        </div>
    )
}