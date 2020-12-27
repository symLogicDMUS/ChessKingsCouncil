import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { Profile } from "./Profile";
// import { SearchBar } from "./SearchBar";
import { CustomizeHeader } from "./Header/CustomizeHeader";
import { LoadDeleteHeader } from "./Header/LoadDeleteHeader";
import { ProfileHeaderError } from "./Header/ProfileHeaderError";
import { useStyles } from "./PieceProfiles.jss";

export function PieceProfiles(props) {
    let [searchText, setSearchText] = useState("");

    const classes = useStyles({theme: props.theme});

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
        let profiles = [];
        let pieceNames = applySearchFilter();
        if (props.context === "load-delete") {
            for (let pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        key={uuidv4()}
                        pieceName={pieceName}
                        expand={props.expand}
                        defs={props.defs}
                        theme={props.theme}
                    >
                        <LoadDeleteHeader
                            key={uuidv4()}
                            pieceName={pieceName}
                            load={props.load}
                            theme={props.theme}
                            style={{
                                justifyContent: "right",
                                width: '93.25%',
                                marginLeft: '3.25%',
                                marginTop: '0.5em',
                                marginBottom: '0.5em',
                            }}
                        />
                    </Profile>
                );
            }
        } else if (props.context === "custom-game") {
            let isCheckmark;
            for (let pieceName of pieceNames) {
                isCheckmark = props.promos.includes(pieceName);
                profiles.push(
                    <Profile
                        key={uuidv4()}
                        pieceName={pieceName}
                        theme={props.theme}
                        expand={props.expand}
                        defs={props.defs}
                    >
                        <CustomizeHeader
                            key={uuidv4()}
                            pieceName={pieceName}
                            promos={props.promos}
                            isCheckmark={isCheckmark}
                            toggleSub={props.toggleSub}
                            newReplacement={props.newReplacement}
                            newReplaced={props.newReplaced}
                            togglePromo={props.togglePromo}
                            theme={props.theme}
                        />
                    </Profile>
                );
            }
        } else {
            return <ProfileHeaderError />;
        }
        return profiles;
    };

    //children is a header or none, depending on the parent page.
    return (
        <>
            <div className={classes.piece_profiles}>
                {props.children}
                {getProfiles()}
            </div>
        </>
    );
}
