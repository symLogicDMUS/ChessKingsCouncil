import React from "react";
import { SubDropdown } from "./CustomGame/SubDropdown";
import { CheckBox } from "./CustomGame/CheckBox";
import "./CustomizeHeader.scss";

export function CustomizeHeader(pieceName, promos, newReplacement, newReplaced, togleSub, toglePromo) {
    return (
        <div className="customize-profile-header" style={{ height: window.screen.availHeight * 0.05 }}>
            <div className="customize-name-of-piece" style={{ fontSize: window.screen.availHeight * 0.03 }}>
                {pieceName}
            </div>
            <div className="customize-sub-label" style={{ fontSize: window.screen.availHeight * 0.03 }}>
                Sub:
            </div>
            <SubDropdown
                piece={pieceName}
                newReplacement={newReplacement}
                newReplaced={newReplaced}
                togleSub={togleSub}
            />
            <div className="customize-promotion-label" style={{ fontSize: window.screen.availHeight * 0.03 }}>
                Promotion:
            </div>
            <CheckBox toglePromo={toglePromo} pieceName={pieceName} promos={promos} />
        </div>
    );
}
