import React from "react";
import LoadBar from "../../CreatePiece/Icon/LoadBar";
import {HelpTitle} from "../NavBar/Help/HelpTitle";
import {AnimatePresencePortal} from "./AnimatePresencePortal";

const PieceSavedSuccessfully = React.lazy(() => import("./PieceSavedSuccessfully"));
const PuttingThePieceICreatedIntoAGame = React.lazy(() => import("../NavBar/Help/Extra/PuttingThePieceICreatedIntoAGame"));

function CreatePiecePageAnimations(props) {
    return <>
        {props.state.uploadPiece && (
            <LoadBar
                theme={props.theme}
                close={props.close}
                pieceName={props.state.name}
                newPiece={props.state.newPiece}
                saveInstance={props.state.saveInstance}

            />
        )}
        {props.state.isFirstVisit && props.state.justSaved && (
            <PuttingThePieceICreatedIntoAGame
                theme={props.theme}
                onClose={props.onClose}
                title={
                    <HelpTitle theme={props.theme} fontSize={"2.6vh"}>
                        Congratulations on Creating Your First Piece!
                        Here's How To Put it Into a Game
                    </HelpTitle>
                }
            />
        )}
        {!props.state.isFirstVisit && props.state.justSaved && (
            <AnimatePresencePortal>
                <PieceSavedSuccessfully
                    callback={props.callback}
                    theme={props.theme}
                />
            </AnimatePresencePortal>
        )}
    </>;
}

export default CreatePiecePageAnimations;