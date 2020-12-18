import React, { useState } from "react";
import { Profile } from "./Profile";
// import { SearchBar } from "./SearchBar";
import { CustomizeHeader } from "./Header/CustomizeHeader";
import { LoadDeleteHeader } from "./Header/LoadDeleteHeader";
import { ProfileHeaderError } from "./Header/ProfileHeaderError";
import { useStyles } from "./PieceProfiles.jss";

export function PieceProfiles(props) {
    let [searchText, setSearchText] = useState("");

    const classes = useStyles();

    const updateSearch = (newText) => {
        setSearchText(newText);
    };

    const applySearchFilter = () => {
        if (searchText !== "") {
            return Object.keys(props.defs).filter((pieceName) =>
                pieceName.toLowerCase().startsWith(searchText)
            );
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
                    <Profile
                        key={pieceName}
                        expand={props.expand}
                        defs={props.defs}
                    >
                        <LoadDeleteHeader
                            key={pieceName}
                            load={props.load}
                            style={{ justifyContent: "right" }}
                        />
                    </Profile>
                );
            }
        } else if (props.context === "custom-game") {
            let isCheckmark;
            for (pieceName of pieceNames) {
                isCheckmark = props.promos.includes(pieceName);
                profiles.push(
                    <Profile
                        key={pieceName}
                        theme={props.theme}
                        expand={props.expand}
                        defs={props.defs}
                    >
                        <CustomizeHeader
                            key={pieceName}
                            promos={props.promos}
                            isCheckmark={isCheckmark}
                            toggleSub={props.toggleSub}
                            newReplacement={props.newReplacement}
                            newReplaced={props.newReplaced}
                            togglePromo={props.togglePromo}
                            theme={props.theme}
                            style={{ justifyContent: "spaced-evenly" }}
                        />
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
