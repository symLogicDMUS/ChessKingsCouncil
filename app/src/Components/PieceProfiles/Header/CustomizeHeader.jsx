import React, { useState } from "react";
import { CheckBox } from "../../Reuseables/CheckBox";
import { fontSizes } from "../../styles/fontSizes";
import MenuItem from "@material-ui/core/MenuItem";
import { Dropdown } from "../../Reuseables/Dropdown";

export function CustomizeHeader({
    theme,
    classes,
    pieceName,
    isCheckmark,
    newReplacement,
    newReplaced,
    toggleSub,
    togglePromo,
    subDropdownStyle,
}) {

    let [subSelection, setSubSelection] = useState("");

    const handleSubSelection = (newSubSelection) => {
        setSubSelection(newSubSelection);
        toggleSub(pieceName, subSelection);
    };

    let isOverride = newReplacement != null && pieceName !== newReplacement && newReplaced === subSelection;

    return (
        <div className={classes.header}>
            <div className={classes.header_grid}>
                <div className={classes.piece_name}>{pieceName}</div>
                <CheckBox
                    theme={theme}
                    clickMethod={togglePromo}
                    clickValue={pieceName}
                    checkmarkState={isCheckmark}
                    className={classes.promo_checkbox}
                    fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    fontSize={fontSizes.medium2}
                    labelText="Promotion"
                />
                <Dropdown
                    list={[
                        <MenuItem value="None">
                            <em>None</em>
                        </MenuItem>,
                        <MenuItem value="Rook">Rook</MenuItem>,
                        <MenuItem value="Bishop">Bishop</MenuItem>,
                        <MenuItem value="Knight">Knight</MenuItem>,
                        <MenuItem value="Queen">Queen</MenuItem>,
                    ]}
                    updateParent={handleSubSelection}
                    overwrite={isOverride}
                    style={subDropdownStyle}
                    theme={theme}
                    inputLabel="Sub Piece"
                    label="Sub Piece"
                />
            </div>
        </div>
    );
}
