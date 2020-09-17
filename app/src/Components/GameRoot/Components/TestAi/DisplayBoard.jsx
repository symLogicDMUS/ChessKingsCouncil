import React from "react";
import {rankfiles} from "../../../helpers/rankfiles";
import {sqrColors} from "../../../helpers/sqrColors";
import {getPosPx} from "../../../helpers/getPosPx";
import "./DisplayBoard.css";

export function DisplayBoard() {

    const getBoard = () => {
        const displaySqrs = [];
        for (var rf of rankfiles) {
            displaySqrs.push(<div className={`test-ai-${sqrColors[rf]}`} style={getPosPx(rf, 75, 600)}></div>);
        }
        return displaySqrs;
    }

    return(
        <div className="test-ai-display-board">
            {getBoard()}
        </div>
    );
}