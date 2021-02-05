import React, {useEffect, useReducer} from "react";
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
import {getRangeBoardImgStr} from "./ProfileWB/getRangeBoardImgStr";
import {sampleDefs} from "../../API/apiHelpers/sampleDefs";
import {reducer} from "./PieceProfiles.red";
import {useStyles} from "./PieceProfiles.jss";

/*children is a header or none, depending on the parent page*/
export function PieceProfiles(props) {
    const [state, dispatch] = useReducer(reducer, {});

    useEffect(() => {
        const standards = ["Rook", "Bishop", "Knight", "Queen", "King", "Pawn"];
        const colors = ["W", "B"];
        getDefs().then(([result]) => {
            let defs;
            if (!result) {
                defs = sampleDefs;
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
            return Object.keys(state).filter((pieceName) =>
                pieceName.toLowerCase().startsWith(props.searchText)
            );
        } else {
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




