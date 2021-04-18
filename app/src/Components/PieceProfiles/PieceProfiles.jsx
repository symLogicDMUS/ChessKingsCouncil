import React, {useEffect, useReducer} from "react";
import Profile from "./Profile";
import {copy} from "../helpers/copy";
import {ProfileSkeleton} from "./ProfileSkeleton";
import {CustomizeHeader} from "./Header/CustomizeHeader";
import {LoadDeleteHeader} from "./Header/LoadDeleteHeader";
import {ProfileHeaderError} from "./Header/ProfileHeaderError";
import {dbSampleDefs} from "../../API/sampleData/sampleDefs/db/dev1";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {getSampleDefs} from "../../API/sampleData/sampleDefs/getSampleDefs";
import {saveDefs} from "../../API/saveDefs";
import {getDefs} from "../../API/getDefs";
import {reducer} from "./PieceProfiles.red";
import {useStyles} from "./PieceProfiles.jss";
import clsx from "clsx";

/*children is a header or none, depending on the parent page*/
function PieceProfiles (props) {
    const [state, dispatch] = useReducer(reducer, {defs: {}, loaded: false});

    useEffect(() => {
        let defs;
        getDefs().then(([result]) => {
            if (!result) {
                defs = {}
            } else {
                defs = result;
                afterLoaded(defs)
            }
        });
    }, []);

    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? 'wide' : 'thin';

    const classes = useStyles({theme: props.theme});

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

    const getProfiles = () => {
        const profiles = [];
        const pieceNames = getPieceNames();
        if (
            props.parentPage === "CreatePiece" ||
            props.parentPage === "MyPieces"
        ) {
            for (let pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        key={`${pieceName}-profile`}
                        defs={state.defs}
                        pieceName={pieceName}
                        expand={props.expand}
                        theme={props.theme}
                        screenCase={screenCase}
                    >
                        <LoadDeleteHeader
                            load={props.load}
                            erase={props.erase}
                            theme={props.theme}
                            dispatch={dispatch}
                            pieceName={pieceName}
                            key={`${pieceName}-header`}
                            def={state.defs[pieceName]}
                            parentPage={props.parentPage}
                            toggleModal={props.toggleModal}
                        />
                    </Profile>
                );
            }
        } else if (props.parentPage === "Customize") {
            for (let pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        defs={state.defs}
                        key={`${pieceName}-profile`}
                        pieceName={pieceName}
                        expand={props.expand}
                        theme={props.theme}
                        screenCase={screenCase}
                    >
                        <CustomizeHeader
                            key={`${pieceName}-header`}
                            customPieceName={pieceName}
                            subs={props.subs}
                            promos={props.promos}
                            toggleSub={props.toggleSub}
                            togglePromo={props.togglePromo}
                            theme={props.theme}
                            screenCase={screenCase}
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
        <div className={clsx(classes.piece_profiles, {
            [props.className]: props.className,
        })}
        >
            {props.children}
            <div className={classes.profiles_area}>
                {state.loaded ? (
                    getProfiles()
                ) : (
                    <ProfileSkeleton theme={props.theme}/>
                )}
            </div>
        </div>
    );
}

export default PieceProfiles;