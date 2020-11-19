import React from "react";
import {SubDropdown} from "./SubDropdown";
import { PromoCheckbox } from "./PromoCheckbox";
import { styleObjects, labelSizes } from "../CustomizeStyle";
import { fontSizes } from "../../../styles/fontSizes";
import { Typography, ThemeProvider } from "@material-ui/core";
import {Label} from "semantic-ui-react";
import "./CustomizeHeader.scss";

export function CustomizeHeader({
    screenCase,
    theme,
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
                 <div className="customize-name-of-piece" style={styleObjects[screenCase]['PieceName']()}>
                    {pieceName}
                </div>
                <PromoCheckbox
                    theme={theme}
                    screenCase={screenCase}
                    toglePromo={toglePromo}
                    pieceName={pieceName}
                    promos={promos}
                />
                <SubDropdown
                    piece={pieceName}
                    theme={theme}
                    screenCase={screenCase}
                    newReplacement={newReplacement}
                    newReplaced={newReplaced}
                    togleSub={togleSub}
                />
            </div>
        </div>
    );
}
