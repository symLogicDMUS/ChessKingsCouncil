import React, { useState } from "react";
import { DisplayBoard } from "./DisplayBoard";
import { getColorName } from "../../helpers/getColorName";
import {styleObjects} from "../PieceProfileStyle";
import "./DisplayBoardModal.scss";

export function DisplayBoardModal({screenCase, theme, img, pieceName, rangeType, range, color, expand }) {
    let [src, setSrc] = useState(`/Images/close/off/${theme}.svg`);

    return (
        <div className="pieces-display-board-modal">
            <div className="pieces-display-board-window" style={styleObjects[screenCase]['displayBoardModal']()}>
                <div className="pieces-display-board-header-title">
                    {getColorName(color)} {pieceName} {rangeType}
                </div>
                <div
                    className="pieces-display-board-header-close"
                    onClick={() => expand(null, null, null)}
                    onMouseEnter={() => setSrc(`/Images/close/on/${theme}.svg`)}
                    onMouseLeave={() => setSrc(`/Images/close/off/${theme}.svg`)}
                >
                    <img
                        src={src}
                        style={{ position: "absolute", width: "70%", height: "70%", marginTop: "15%" }}
                        alt="close display board window"
                    />
                </div>
                <DisplayBoard
                    img={img}
                    screenCase={screenCase}
                    pieceName={pieceName}
                    rangeType={rangeType}
                    range={range}
                    color={color}
                    expand={expand}
                    location="d4"
                />
            </div>
        </div>
    );
}
