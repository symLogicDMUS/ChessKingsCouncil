import React from "react";
import { CheckBox } from "./Profile/CheckBox";
import { SubDropdown } from "./Profile/SubDropdown";
import "./ProfileHeader.scss";

export function ProfileHeader(pieceName, promos, newReplacement, newReplaced, togleSub, toglePromo) {
    return (
        <div className="new-game-profile-header">
            <div className="new-game-name-of-piece">{pieceName}</div>
            <div className="new-game-substitute">
                <div className="new-game-sub-label">Sub:</div>
                <div className="new-game-sub-dropdown-container">
                    <SubDropdown
                        piece={pieceName}
                        newReplacement={newReplacement}
                        newReplaced={newReplaced}
                        togleSub={togleSub}
                    />
                </div>
            </div>
            <div className="new-game-promotion">
                <div className="new-game-promotion-label">Promotion:</div>
                <div className="new-game-promotion-checkbox-container">
                    <CheckBox
                        toglePromo={toglePromo}
                        pieceName={pieceName}
                        promos={promos}
                    />
                </div>
            </div>
        </div>
    );
}
