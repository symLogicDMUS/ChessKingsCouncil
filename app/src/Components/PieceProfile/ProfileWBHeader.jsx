import React, {useState} from "react";
import { getColorName } from "../helpers/getColorName";
import { fontSizes } from "../styles/fontSizes";
import "./ProfileWBHeader.scss";

export function ProfileWBHeader({screenCase, className, expand, pieceName, color, rangeType}) {
        
        let [src, setSrc] = useState("/Images/expand/expand-969696.svg");

        return (
            <div className={className}>
                <div className="wb-piece-name" style={{fontSize: fontSizes[screenCase]['medium2']()}}>
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
