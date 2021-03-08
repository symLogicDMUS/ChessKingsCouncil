import React, {useEffect, useReducer} from "react";
import {v4 as uuidv4} from "uuid";
import "../styles/scrollbar.scss";
import {Profile} from "./Profile";
import {copy} from "../helpers/copy";
import MediaQuery from "react-responsive/src";
import {ProfileSkeleton} from "./ProfileSkeleton";
import {CustomizeHeader} from "./Header/CustomizeHeader";
import {LoadDeleteHeader} from "./Header/LoadDeleteHeader";
import {ProfileHeaderError} from "./Header/ProfileHeaderError";
import { dbSampleDefs } from "../../API/apiHelpers/dbSampleDefs";
import {getSampleDefs} from "../../API/getSampleDefs";
import { saveDefs } from "../../API/saveDefs";
import {getDefs} from "../../API/getDefs";
import {reducer} from "./PieceProfiles.red";
import {useStyles} from "./PieceProfiles.jss";
import {getRangeBoardImgStrs} from "./ProfileWB/getRangeBoardImgStrs";

/*children is a header or none, depending on the parent page*/
export function PieceProfiles(props) {
    const [state, dispatch] = useReducer(reducer, {defs: {}, loaded: false});

    const classes = useStyles({theme: props.theme, style: props.style});

    useEffect(() => {
        let defs;
        getDefs().then(([result]) => {
            if (!result) {
                saveDefs(dbSampleDefs).then(([r]) => {
                    defs = getSampleDefs();
                    afterLoaded(defs)
                })
            } else {
                defs = result;
                afterLoaded(defs)
            }
        });
    }, []);

    useEffect(() => {
        dispatch({type: 'update-range-boards', theme: props.theme})
    }, [props.theme])

    const afterLoaded = (defs) => {
        const standards = ["Rook", "Bishop", "Knight", "Queen", "King", "Pawn"];
        if (props.updateParent) {
            props.updateParent(copy(defs));
        }
        for (const pieceName of standards) {
            if (Object.keys(defs).includes(pieceName)) {
                delete defs[pieceName];
            }
        }
        defs = getRangeBoardImgStrs(props.theme, defs)
        dispatch({type: "load", payload: defs, theme: props.theme});
    }

    const getPieceNames = () => {
        if (props.searchText && props.searchText !== "") {
            return Object.keys(state.defs).filter((pieceName) =>
                pieceName.toLowerCase().startsWith(props.searchText)
            );
        } else {
            return Object.keys(state.defs);
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
                        key={uuidv4()}
                        defs={state.defs}
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
                            screenCase={screenCase}
                            def={state.defs[pieceName]}
                            parentPage={props.parentPage}
                            toggleModal={props.toggleModal}
                            theme={props.theme}
                        />
                    </Profile>
                );
            }
        } else if (props.parentPage === "Customize") {
            for (let pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        defs={state.defs}
                        key={uuidv4()}
                        pieceName={pieceName}
                        theme={props.theme}
                        expand={props.expand}
                        screenCase={screenCase}
                    >
                        <CustomizeHeader
                            key={uuidv4()}
                            pieceName={pieceName}
                            subs={props.subs}
                            promos={props.promos}
                            toggleSub={props.toggleSub}
                            togglePromo={props.togglePromo}
                            screenCase={screenCase}
                            theme={props.theme}
                        />
                    </Profile>
                );
            }
        } else {
            return <ProfileHeaderError/>;
        }
        return profiles;
    };

    return (
        <div className={`scrollbar-${props.theme}`}>
            <div className={classes.piece_profiles}>
                {props.children}
                <MediaQuery minDeviceWidth={1040}>
                    <div className={classes.profiles_window}>
                        {state.loaded ? (
                            getProfiles('desktop')
                        ) : (
                            <ProfileSkeleton theme={props.theme}/>
                        )}
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1040}>
                    <div className={classes.profiles_window}>
                        {state.loaded ? (
                            getProfiles('mobile')
                        ) : (
                            <ProfileSkeleton theme={props.theme}/>
                        )}
                    </div>
                </MediaQuery>
            </div>
        </div>
    );
}