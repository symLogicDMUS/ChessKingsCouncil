import React from "react";
import { SubDropdown } from "./SubDropdown";
import {CheckBox} from '../../../Reuseables/CheckBox';
import { styleObjects } from "../CustomizeStyle";

export function CustomizeHeader({
    screenCase,
    theme,
    pieceName,
    isCheckmark,
    newReplacement,
    newReplaced,
    togleSub,
    toglePromo,
}) {

    const profileHeaderStyle = styleObjects[screenCase]["profileHeader"]();
    const profileGridStyle = styleObjects[screenCase]['profileGrid']();
    const pieceNameStyle = styleObjects[screenCase]['pieceName']();
    const subDropdownStyle = styleObjects[screenCase]['subDropdown']();
    const promoCheckboxStyle = styleObjects[screenCase]['promoCheckbox']();
    return (
        <div style={profileHeaderStyle}>
            <div style={profileGridStyle}>
                <div style={pieceNameStyle}>{pieceName}</div>
                <CheckBox
                    theme={theme}
                    labelText="Promotion"
                    position={promoCheckboxStyle}
                    fontSize={styleObjects[screenCase]['fontSize1']()}
                    fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    screenCase={screenCase}
                    clickMethod={toglePromo}
                    clickValue={pieceName}
                    labelStyleMethod="PromoLabel"
                    boxStyleMethod="PromoCheckbox"
                    checkmarkState={isCheckmark}
                />
                <SubDropdown
                    theme={theme}
                    piece={pieceName}
                    fontSize={styleObjects[screenCase]['fontSize2']()}
                    positionAndWidth={subDropdownStyle}
                    screenCase={screenCase}
                    newReplacement={newReplacement}
                    newReplaced={newReplaced}
                    togleSub={togleSub}
                />
            </div>
        </div>
    );
}
