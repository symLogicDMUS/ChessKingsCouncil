import React, { useState } from "react";
import { Profile } from "./Profile";
// import { SearchBar } from "./SearchBar";
import {Divider} from "@material-ui/core";
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
                        key={pieceName}
                        pieceName={pieceName}
                        expand={props.expand}
                        defs={props.defs}
                    >
                        <LoadDeleteHeader
                            key={pieceName}
                            pieceName={pieceName}
                            load={props.load}
                            style={{ justifyContent: "right" }}
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
                        key={pieceName}
                        pieceName={pieceName}
                        theme={props.theme}
                        expand={props.expand}
                        defs={props.defs}
                    >
                        <CustomizeHeader
                            key={pieceName}
                            pieceName={pieceName}
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
                // profiles.push(<Divider className={classes.divider} />)
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
