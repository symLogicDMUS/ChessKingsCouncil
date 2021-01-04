import React, {useEffect, useReducer, useState} from "react";
import {v4 as uuidv4} from "uuid";
import MediaQuery from "react-responsive/src";
import {getDefs} from "../../API/getDefs";
import {Profile} from "./Profile";
import {CustomizeHeader} from "./Header/CustomizeHeader";
import {LoadDeleteHeader} from "./Header/LoadDeleteHeader";
import {ProfileHeaderError} from "./Header/ProfileHeaderError";
import {ld_header_style} from "./Header/LoadDeleteHeader.jss";
import "../styles/scrollbar.scss";
import {fontSize} from "../styles/fontSize.jss";
import {useStyles} from "./PieceProfiles.jss";

export function PieceProfiles(props) {
    let [searchText, setSearchText] = useState("");
    let [defs, setDefs] = useState({});
    const classes = useStyles({ theme: props.theme, style: props.style });

    const update = (defs_) => {
        setDefs(defs_);
        if (props.updateParent) {
            props.updateParent(defs);
        }
    };

    const standards = ["Rook", "Bishop", "Knight", "Queen", "King", "Pawn"];
    useEffect(() => {
        getDefs().then(([defs_]) => {
            if (defs_) {
                for (const pieceName of standards) {
                    if (Object.keys(defs_).includes(pieceName)) {
                        delete defs_[pieceName];
                    }
                }
                update(defs_);
            }
        });
    }, []);


    const updateSearch = (newText) => {
        setSearchText(newText);
    };

    const applySearchFilter = () => {
        if (searchText !== "") {
            return Object.keys(defs).filter((pieceName) =>
                pieceName.toLowerCase().startsWith(searchText)
            );
        } else {
            return Object.keys(defs);
        }
    };

    const getProfiles = (screenCase) => {
        let profiles = [];
        let pieceNames = applySearchFilter();
        if (
            props.parentPage === "CreatePiece" ||
            props.parentPage === "MyPieces"
        ) {
            for (let pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        key={uuidv4()}
                        defs={defs}
                        pieceName={pieceName}
                        expand={props.expand}
                        theme={props.theme}
                        screenCase={screenCase}
                    >
                        <LoadDeleteHeader
                            key={uuidv4()}
                            load={props.load}
                            def={defs[pieceName]}
                            pieceName={pieceName}
                            parentPage={props.parentPage}
                            screenCase={screenCase}
                            theme={props.theme}
                            style={ld_header_style(fontSize)}
                        />
                    </Profile>
                );
            }
        } else if (props.parentPage === "Customize") {
            let isCheckmark;
            for (let pieceName of pieceNames) {
                isCheckmark = props.promos.includes(pieceName);
                profiles.push(
                    <Profile
                        key={uuidv4()}
                        defs={defs}
                        pieceName={pieceName}
                        theme={props.theme}
                        expand={props.expand}
                        screenCase={screenCase}
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
                            screenCase={screenCase}
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
        <div className={`scrollbar-${props.theme}`}>
            <div className={classes.piece_profiles}>
                {props.children}
                <MediaQuery minDeviceWidth={768}>
                    {getProfiles("desktop")}
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    {getProfiles("mobile")}
                </MediaQuery>
            </div>
        </div>
    );
}