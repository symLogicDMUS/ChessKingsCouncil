import React from "react";
import LoadBar from "../../CreatePiece/Icon/LoadBar";
import {HelpTitle} from "../NavBar/Help/HelpTitle";
import {AnimatePresencePortal} from "./AnimatePresencePortal";

const PieceSavedSuccessfully = React.lazy(() => import("./PieceSavedSuccessfully"));
const PuttingThePieceICreatedIntoAGame = React.lazy(() => import("../NavBar/Help/Extra/PuttingThePieceICreatedIntoAGame"));

function CreatePiecePageAnimations(props) {
    const {state, close, onClose, callback, name, theme} = props;
    return <>
        {state.uploadPiece && (
            <LoadBar
                theme={theme}
                close={close}
                pieceName={name}
                newPiece={state.newPiece}
                saveInstance={state.saveInstance}

            />
        )}
        {state.isFirstVisit && state.justSaved && (
            <PuttingThePieceICreatedIntoAGame
                theme={theme}
                onClose={onClose}
                title={
                    <HelpTitle theme={theme} fontSize={"2.6vh"}>
                        Congratulations on Creating Your First Piece!
                        Here's How To Put it Into a Game
                    </HelpTitle>
                }
            />
        )}
        {!state.isFirstVisit && state.justSaved && (
            <AnimatePresencePortal>
                <PieceSavedSuccessfully
                    callback={callback}
                    theme={theme}
                />
            </AnimatePresencePortal>
        )}
    </>;
}

export default CreatePiecePageAnimations;