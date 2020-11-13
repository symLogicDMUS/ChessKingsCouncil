import React from "react";
import { SubDropdown } from "./CustomGame/SubDropdown";
import { CheckBox } from "./CustomGame/CheckBox";
import { styleObjects } from "./PieceProfileStyle";
import { fontSizes } from "../styles/fontSizes";
import "./CustomizeHeader.scss";

export function CustomizeHeader({
    screenCase,
    pieceName,
    promos,
    newReplacement,
    newReplaced,
    togleSub,
    toglePromo,
    pieceProfilesStyle,
}) {
    const subAndPromoTextSize = fontSizes[screenCase]["medium1"]();
    return (
        <div
            className="customize-profile-header"
            style={styleObjects[screenCase]["ProfileHeader"](pieceProfilesStyle)}
        >
            <div
                className="customize-name-of-piece"
                style={{ fontSize: fontSizes[screenCase]["medium4"]() }}
            >
                {pieceName}
            </div>
            <div className="customize-sub-label" style={{ fontSize: subAndPromoTextSize, paddingTop: subAndPromoTextSize * 0.1 }}>
                Sub:
            </div>
            <SubDropdown
                piece={pieceName}
                screenCase={screenCase}
                newReplacement={newReplacement}
                newReplaced={newReplaced}
                togleSub={togleSub}
            />
            <div
                className="customize-promotion-label"
                style={{ fontSize: subAndPromoTextSize, paddingTop: subAndPromoTextSize * 0.1 }}
            >
                Promotion:
            </div>
            <CheckBox screenCase={screenCase} toglePromo={toglePromo} pieceName={pieceName} promos={promos} />
        </div>
    );
}
