import React from "react";
import { SubDropdown } from "./SubDropdown";
import { CheckBox } from "../../../Reuseables/CheckBox";
import {fontSizes} from "../../../styles/fontSizes";

export function CustomizeHeader({
    theme,
    classes,
    pieceName,
    isCheckmark,
    newReplacement,
    newReplaced,
    toggleSub,
    togglePromo,
}) {
    return (
        <div className={classes.profileHeader}>
            <div className={classes.profileGrid}>
                <div className={classes.pieceName}>{pieceName}</div>
                <CheckBox
                    theme={theme}
                    clickMethod={togglePromo}
                    clickValue={pieceName}
                    checkmarkState={isCheckmark}
                    className={classes.promoCheckbox}
                    fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    fontSize={fontSizes.medium2}
                    labelText="Promotion"
                />
                <SubDropdown
                    piece={pieceName}
                    theme={theme}
                    className={classes.subDropdown}
                    newReplacement={newReplacement}
                    newReplaced={newReplaced}
                    togleSub={toggleSub}
                />
            </div>
        </div>
    );
}
