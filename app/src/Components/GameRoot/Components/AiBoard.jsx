import React from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { getPosPx } from "../../helpers/getPosPx";
import "./AiBoard.scss";

export function AiBoard({ aiStart, aiDest }) {
    const screenHeight = window.screen.availHeight;
    const screenWidth = window.screen.availWidth;

    const getBoard = () => {
        let squares = [];
        let pxPos = null;
        for (var rf of rankfiles) {
            pxPos = getPosPx(rf);
            pxPos["position"] = "absolute";
            pxPos["zIndex"] = 2;

            if (rf === aiStart) {
                squares.push(
                    <div style={pxPos}>
                        <img src="/Images/sqr/sqr-outline-fdfd35.svg" className="sqr-img" alt="ai start square" />
                    </div>
                );
            } else if (rf === aiDest) {
                squares.push(
                    <div style={pxPos}>
                        <img
                            src="/Images/sqr/sqr-highlight-fdfd35.svg"
                            className="sqr-img"
                            alt="ai destination square"
                        />
                    </div>
                );
            } else {
                squares.push(<div style={pxPos}>{null}</div>);
            }
        }

        return squares;
    };

    return (
        <div
            className="ai-board"
            style={{
                width: screenWidth * 0.39,
                height: screenHeight * 0.7957,
                left: screenWidth * 0.23958,
                top: screenHeight * 0.1458,
            }}
        >
            {getBoard()}
        </div>
    );
}
