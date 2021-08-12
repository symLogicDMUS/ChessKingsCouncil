import React, { useContext } from "react";
import LoadBar from "../../CreatePiece/Icon/LoadBar";
import { HelpTitle } from "../NavBar/Help/HelpTitle";
import { HelpContext } from "../../../Context/HelpContext";
import { AnimatePresencePortal } from "./AnimatePresencePortal";

const PieceSavedSuccessfully = React.lazy(() =>
    import("./PieceSavedSuccessfully")
);
const PuttingThePieceICreatedIntoAGame = React.lazy(() =>
    import("../NavBar/Help/Extra/PuttingThePieceICreatedIntoAGame")
);

function CreatePiecePageAnimations(props) {
    const { state, newPiece, close, callback, updateImg, name, theme } = props;

    const { help, helpDispatch } = useContext(HelpContext);

    return (
        <>
            {state.uploadPiece && (
                <LoadBar
                    theme={theme}
                    close={close}
                    pieceName={name}
                    newPiece={newPiece}
                    saveInstance={state.saveInstance}
                    updateImg={updateImg}
                />
            )}
            {help.firstSave && state.justSaved && (
                <PuttingThePieceICreatedIntoAGame
                    theme={theme}
                    onClose={() =>
                        helpDispatch({
                            type: "update-help",
                            pageName: "firstSave",
                            value: false,
                        })
                    }
                    title={
                        <HelpTitle theme={theme} fontSize={"2.6vh"}>
                            Congratulations on Creating Your First Piece! Here's
                            How To Put it Into a Game
                        </HelpTitle>
                    }
                />
            )}
            {!help.firstSave && state.justSaved && (
                <AnimatePresencePortal>
                    <PieceSavedSuccessfully callback={callback} theme={theme} />
                </AnimatePresencePortal>
            )}
        </>
    );
}

export default CreatePiecePageAnimations;
