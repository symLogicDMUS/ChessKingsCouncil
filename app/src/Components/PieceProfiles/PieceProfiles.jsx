import React, {useEffect, useReducer, memo} from "react";
import {v4 as uuidv4} from "uuid";
import "../styles/Scrollbar.scss";
import {Profile} from "./Profile";
import {copy} from "../helpers/copy";
import {getDefs} from "../../API/getDefs";
import MediaQuery from "react-responsive/src";
import {fontSize002} from "../styles/fontSizes.jss";
import {CustomizeHeader} from "./Header/CustomizeHeader";
import {LoadDeleteHeader} from "./Header/LoadDeleteHeader";
import {ProfileHeaderError} from "./Header/ProfileHeaderError";
import {ld_header_style} from "./Header/LoadDeleteHeader.jss";
import {useStyles} from "./PieceProfiles.jss";

const reducer = (state, action) => {
    switch (action.type) {
        case 'load':
            // payload == defs
            return action.payload;
        case 'delete':
            const defs = copy(state)
            //payload == pieceName
            delete defs[action.payload]
            return defs;
        default:
            return {}
    }
}

/*children is a header or none, depending on the parent page*/
export function PieceProfiles(props) {

    const [state, dispatch] = useReducer(reducer, {});

    useEffect(() => {
        const standards = ["Rook", "Bishop", "Knight", "Queen", "King", "Pawn"];
        getDefs().then(([defs]) => {
            if (defs) {
                if (props.updateParent) {
                    props.updateParent(copy(defs))
                }
                for (const pieceName of standards) {
                    if (Object.keys(defs).includes(pieceName)) {
                        delete defs[pieceName];
                    }
                }
                dispatch({type: 'load', payload: defs})
            }
        });
    }, []);

    const classes = useStyles({ theme: props.theme, style: props.style });

    const getPieceNames = () => {
        if (props.searchText && props.searchText !== '') {
            return Object.keys(state).filter(pieceName => pieceName.toLowerCase().startsWith(props.searchText))
        }
        else {
            return Object.keys(state);
        }
    };

    const getProfiles = (screenCase) => {
        let profiles = [];
        let pieceNames = getPieceNames();
        if (
            props.parentPage === "CreatePiece" ||
            props.parentPage === "MyPieces"
        ) {
            for (let pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        defs={state}
                        key={uuidv4()}
                        pieceName={pieceName}
                        expand={props.expand}
                        theme={props.theme}
                        screenCase={screenCase}
                    >
                        <LoadDeleteHeader
                            key={uuidv4()}
                            load={props.load}
                            dispatch={dispatch}
                            pieceName={pieceName}
                            def={state[pieceName]}
                            screenCase={screenCase}
                            parentPage={props.parentPage}
                            style={ld_header_style(fontSize002)}
                            theme={props.theme}
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
                        defs={state}
                        key={uuidv4()}
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
                            screenCase={screenCase}
                            theme={props.theme}
                        />
                    </Profile>
                );
            }
        } else {
            return <ProfileHeaderError />;
        }
        return profiles;
    }

    return (
        <div className={`scrollbar-${props.theme}`}>
            <div className={classes.piece_profiles}>
                {props.children}
                <MediaQuery minDeviceWidth={768}>
                    <div className={classes.profiles_window}>{getProfiles("desktop")}</div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    <div className={classes.profiles_window}>{getProfiles("mobile")}</div>
                </MediaQuery>
            </div>
        </div>
    );
}