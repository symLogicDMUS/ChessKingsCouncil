import React, {useEffect, useReducer} from "react";
import {v4 as uuidv4} from "uuid";
import "../styles/Scrollbar.scss";
import {Profile} from "./Profile";
import {copy} from "../helpers/copy";
import {getDefs} from "../../API/getDefs";
import MediaQuery from "react-responsive/src";
import {ProfileSkeleton} from "./ProfileSkeleton";
import {CustomizeHeader} from "./Header/CustomizeHeader";
import {LoadDeleteHeader} from "./Header/LoadDeleteHeader";
import {ProfileHeaderError} from "./Header/ProfileHeaderError";
import {getRangeBoardImgStr} from "./ProfileWB/getRangeBoardImgStr";
import {getSetSampleDefs} from "../../API/getSetSampleDefs";
import {reducer} from "./PieceProfiles.red";
import {useStyles} from "./PieceProfiles.jss";

/*children is a header or none, depending on the parent page*/
export function PieceProfiles(props) {
    const [state, dispatch] = useReducer(reducer, {defs: {}, loaded: false});

    useEffect(() => {
        const standards = ["Rook", "Bishop", "Knight", "Queen", "King", "Pawn"];
        const colors = ["W", "B"];
        getDefs().then(([result]) => {
            let defs;
            if (!result) {
                defs = getSetSampleDefs();
            }
            else {
                defs = result;
            }
            if (props.updateParent) {
                props.updateParent(copy(defs));
            }
            for (const pieceName of standards) {
                if (Object.keys(defs).includes(pieceName)) {
                    delete defs[pieceName];
                }
            }
            for (const pieceName of Object.keys(defs)) {
                for (const color of colors) {
                    defs[pieceName][color].span_img = getRangeBoardImgStr(
                        defs[pieceName][color].img,
                        "d4",
                        "span",
                        defs[pieceName][color].spans,
                        pieceName,
                        props.theme,
                    );
                    defs[pieceName][color].offset_img = getRangeBoardImgStr(
                        defs[pieceName][color].img,
                        'd4',
                        'offset',
                        defs[pieceName][color].offsets,
                        pieceName,
                        props.theme
                    )
                }
            }
            dispatch({type: "load", payload: defs});
        });
    }, []);

    const classes = useStyles({theme: props.theme, style: props.style});

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
                <MediaQuery minDeviceWidth={768}>
                    <div className={classes.profiles_window}>{getProfiles('desktop')}</div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    <div className={classes.profiles_window}>{getProfiles('mobile')}</div>
                </MediaQuery>
            </div>
        </div>
    );
}