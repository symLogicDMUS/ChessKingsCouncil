import clsx from "clsx";
import React from "react";
import {useEffect} from "react";
import {useContext} from "react";
import {useReducer} from "react";
import {copy} from "../helpers/copy";
import {getDefs} from "../../API/getDefs";
import CustomizeHeader from "./Header/CustomizeHeader";
import LoadDeleteHeader from "./Header/LoadDeleteHeader";
import {ProfileHeaderError} from "./Header/ProfileHeaderError";
import {getSampleDefs} from "../../API/sampleData/getSampleDefs";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {UserContext} from "../../Context/UserContext";
import {reducer} from "./PieceProfiles.red";
import {useStyles} from "./PieceProfiles.jss";

const Profile = React.lazy(() => import('./Profile'));
const ProfileSkeleton = React.lazy(() => import('./ProfileSkeleton'));

/*children is a header or none, depending on the parent page*/
function PieceProfiles (props) {
    const {
        updateParent, 
        parentPage, 
        load, 
        erase, 
        expand, 
        subs, 
        promos, 
        toggleSub, 
        togglePromo, 
        toggleModal, 
        searchText,
        className,
        theme, 
        children
    } = props;
    
    const [state, dispatch] = useReducer(reducer, {defs: {}, loaded: false});

    const uid = useContext(UserContext);
    useEffect(() => {
        let defs;
        if (uid) {
            getDefs().then(([result]) => {
                if (!result) {
                    defs = {}
                } else {
                    defs = result;
                    afterLoaded(defs)
                }
            });
        }
        else {
            defs = getSampleDefs()
            afterLoaded(defs)
        }

    }, [uid]);

    const isWide = useMediaQuery("(min-width:960px)");
    const screenCase = isWide ? 'wide' : 'thin';

    const classes = useStyles({theme: theme});

    const afterLoaded = (defs) => {
        const standards = ["Rook", "Bishop", "Knight", "Queen", "King", "Pawn"];
        if (updateParent) {
            updateParent(copy(defs));
        }
        for (const pieceName of standards) {
            if (Object.keys(defs).includes(pieceName)) {
                delete defs[pieceName];
            }
        }
        dispatch({type: "load", payload: defs, theme: theme});
    }

    const getPieceNames = () => {
        if (searchText && searchText !== "") {
            return Object.keys(state.defs).filter((pieceName) =>
                pieceName.toLowerCase().startsWith(searchText)
            );
        } else {
            return Object.keys(state.defs);
        }
    };

    const getProfiles = () => {
        const profiles = [];
        const pieceNames = getPieceNames();
        if (
            parentPage === "CreatePiece" ||
            parentPage === "MyPieces"
        ) {
            for (let pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        key={`${pieceName}-profile`}
                        defs={state.defs}
                        pieceName={pieceName}
                        expand={expand}
                        theme={theme}
                        screenCase={screenCase}
                    >
                        <LoadDeleteHeader
                            load={load}
                            erase={erase}
                            theme={theme}
                            dispatch={dispatch}
                            pieceName={pieceName}
                            key={`${pieceName}-header`}
                            def={state.defs[pieceName]}
                            parentPage={parentPage}
                            toggleModal={toggleModal}
                        />
                    </Profile>
                );
            }
        } else if (parentPage === "Customize") {
            for (let pieceName of pieceNames) {
                profiles.push(
                    <Profile
                        defs={state.defs}
                        key={`${pieceName}-profile`}
                        pieceName={pieceName}
                        expand={expand}
                        theme={theme}
                        screenCase={screenCase}
                        adjust={true}
                    >
                        <CustomizeHeader
                            key={`${pieceName}-header`}
                            customPieceName={pieceName}
                            subs={subs}
                            promos={promos}
                            toggleSub={toggleSub}
                            togglePromo={togglePromo}
                            screenCase={screenCase}
                            theme={theme}
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
            [className]: className,
        })}
        >
            {children}
            <div className={classes.profiles_area}>
                {state.loaded ? (
                    getProfiles()
                ) : (
                    <ProfileSkeleton theme={theme}/>
                )}
            </div>
        </div>
    );
}

export default PieceProfiles;