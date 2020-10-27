import React from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { getPosPx } from "../../helpers/getPosPx";
import {ai_board} from "../styles/desktop/Board";
import "../css/AiBoard.scss";

export function AiBoard({ aiStart, aiDest, theme }) {

    const getBoard = () => {
        let squares = [];
        let pxPos = null;
        for (var rf of rankfiles) {
            pxPos = getPosPx(rf);
            pxPos["position"] = "absolute";
            pxPos["zIndex"] = 2;

            if (rf === aiStart) {
                squares.push(
                    <div style={pxPos} className={`ai-start-sqr-${theme}`}>
                        {/* <img src="/Images/sqr/sqr-outline-fdfd35.svg" className="sqr-img" alt="ai start square" /> */}
                    </div>
                );
            } else if (rf === aiDest) {
                squares.push(
                    <div style={pxPos} className={`ai-dest-sqr-${theme}`}>
                        {/* <img
                            src="/Images/sqr/sqr-highlight-fdfd35.svg"
                            className="sqr-img"
                            alt="ai destination square"
                        /> */}
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
            style={ai_board}
        >
            {getBoard()}
        </div>
    );
}
