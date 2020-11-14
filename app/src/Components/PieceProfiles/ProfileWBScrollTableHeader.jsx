import React, {useState} from "react";
import { getColorName } from "../helpers/getColorName";
import {styleObjects} from "./PieceProfileStyle";
import { fontSizes } from "../styles/fontSizes";
import "./ProfileWBScrollTableHeader.scss";

export function ProfileWBScrollTableHeader({screenCase, pieceProfilesStyle, className, expand, pieceName, color, rangeType}) {
        
        let [src, setSrc] = useState("/Images/expand/expand-969696.svg");

        return (
            <div className={className}>
                <div className="color-and-range-type" style={{fontSize: fontSizes[screenCase]['medium1']()}}>
                    {getColorName(color)} {rangeType}
                </div>
                <div
                    className="expand-modal"
                    onClick={() => expand(pieceName, color, rangeType)}
                    onMouseEnter={() => setSrc("/Images/expand/expand-72e2ff.svg")}
                    onMouseLeave={() => setSrc("/Images/expand/expand-969696.svg")}
                >
                    <img className="expand-modal-icon" src={src} alt="expand icon" />
                </div>
            </div>
        );
}
