import React, { useState } from "react";
import { Profile } from "./Profile";
// import { SearchBar } from "./SearchBar";
import { CustomizeHeader } from "./Header/CustomizeHeader";
import { LoadDeleteHeader } from "./Header/LoadDeleteHeader";
import { ProfileHeaderError } from "./Header/ProfileHeaderError";
import { useStyles, subDropdownStyle } from "./PieceProfiles.jss";

export function PieceProfiles(props) {
    let [searchText, setSearchText] = useState("");

    const classes = useStyles();

    const updateSearch = (newText) => {
        setSearchText(newText);
    };

    const applySearchFilter = () => {
        if (searchText !== "") {
            return Object.keys(props.defs).filter((pieceName) => pieceName.toLowerCase().startsWith(searchText));
        } else {
            return Object.keys(props.defs);
        }
    };

    const getProfiles = () => {
        let pieceName;
        let profiles = [];
        let pieceNames = applySearchFilter();
        if (props.context === "load-delete") {
            for (pieceName of pieceNames) {
                profiles.push(
                    <Profile pieceName={pieceName} expand={props.expand} defs={props.defs} context={props.context}>
                        {LoadDeleteHeader({
                            pieceName: pieceName,
                            load: props.load,
                            prepareDelete: props.prepareDelete,
                            classes: {
                                header: classes.ld_header,
                                piece_name: classes.ld_piece_name,
                                load_button: classes.load_button,
                                delete_button: classes.delete_button,
                            },
                        })}
                    </Profile>
                );
            }
        } else if (props.context === "custom-game") {
            let isCheckmark;
            for (pieceName of pieceNames) {
                isCheckmark = props.promos.includes(pieceName);
                profiles.push(
                    <Profile
                        pieceName={pieceName}
                        theme={props.theme}
                        expand={props.expand}
                        defs={props.defs}
                        context={props.context}
                    >
                        {CustomizeHeader({
                            pieceName: pieceName,
                            promos: props.promos,
                            isCheckmark: isCheckmark,
                            Sub: props.toggleSub,
                            newReplacement: props.newReplacement,
                            newReplaced: props.newReplaced,
                            togglePromo: props.togglePromo,
                            theme: props.theme,
                            classes: {
                                header: classes.cust_header,
                                header_grid: classes.cust_header_grid,
                                piece_name: classes.cust_piece_name,
                                promo_checkbox: classes.promo_checkbox,
                                sub_dropdown: classes.sub_dropdown,
                            },
                            subDropdownStyle: subDropdownStyle,
                        })}
                    </Profile>
                );
            }
        } else {
            return <ProfileHeaderError />;
        }
        return profiles;
    };

    return (
        <>
            <div className={classes.piece_profiles}>{getProfiles()}</div>
        </>
    );
}
