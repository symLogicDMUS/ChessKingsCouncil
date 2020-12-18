import React, { useState } from "react";
import { CheckBox } from "../../Reuseables/CheckBox";
import MenuItem from "@material-ui/core/MenuItem";
import { Dropdown } from "../../Reuseables/Dropdown";
import { fontSize } from "../../styles/fontSize.jss";
import { useStyles } from "./PieceHeader.jss";
import { promo_checkbox, sub_dropdown } from "./CustomizeHeader.jss";

export function CustomizeHeader({
    pieceName,
    isCheckmark,
    newReplacement,
    newReplaced,
    toggleSub,
    togglePromo,
    theme,
    style,
}) {
    let [subSelection, setSubSelection] = useState("");

    const classes = useStyles({
        theme: theme,
        fontSize: fontSize,
        style: style,
    });

    const handleSubSelection = (newSubSelection) => {
        setSubSelection(newSubSelection);
        toggleSub(pieceName, subSelection);
    };

    let isOverride =
        newReplacement != null &&
        pieceName !== newReplacement &&
        newReplaced === subSelection;

    return (
        <div className={classes.header}>
            <div className={classes.piece_name}>{pieceName}</div>
            <CheckBox
                clickMethod={togglePromo}
                clickValue={pieceName}
                checkmarkState={isCheckmark}
                style={promo_checkbox(fontSize)}
                theme={theme}
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
                theme={theme}
                style={sub_dropdown(fontSize)}
                variant={"outlined"}
                inputLabel="Sub Piece"
                label="Sub Piece"
            />
        </div>
    );
}
