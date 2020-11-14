import React from "react";
import { SubDropdown } from "./SubDropdown";
import { CheckBox } from "./CheckBox";
import { styleObjects } from "../CustomizeStyle";
import { fontSizes } from "../../../styles/fontSizes";
import "./CustomizeHeader.scss";

export function CustomizeHeader({
    screenCase,
    pieceName,
    promos,
    newReplacement,
    newReplaced,
    togleSub,
    toglePromo,
}) {
    const subAndPromoTextSize = fontSizes[screenCase]["medium1"]();
    return (
        <div className="customize-profile-header" style={styleObjects[screenCase]["ProfileHeader"]()}>
            <div className="customize-profile-grid" style={styleObjects[screenCase]["ProfileGrid"]()}>
                <div className="customize-name-of-piece" style={styleObjects[screenCase]["PieceName"]()}>
                    {pieceName}
                </div>
                <div className="customize-promotion-label" style={styleObjects[screenCase]["PromoLabel"]()}>
                    Promotion:
                </div>
                <CheckBox screenCase={screenCase} toglePromo={toglePromo} pieceName={pieceName} promos={promos} />
                <div className="customize-sub-label" style={styleObjects[screenCase]['SubLabel']()}>Sub:</div>
                <SubDropdown
                    piece={pieceName}
                    screenCase={screenCase}
                    newReplacement={newReplacement}
                    newReplaced={newReplaced}
                    togleSub={togleSub}
                />
            </div>
        </div>
    );
}
