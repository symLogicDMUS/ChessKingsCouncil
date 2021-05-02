import React, { useState } from "react";
import { Portal } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import { useStyles } from "../Reuseables/Animations/AnimatePresencePortal.jss";
import {GameSavedSuccessfully} from "../CreatePiece/animations/GameSavedSuccessfully";
import CapturedPiecesModal from "./CapturedPieceImg/CapturedPiecesModal";
import ToolButton from "../Reuseables/Clickables/ToolButton";
import ResignModal from "./SaveResignTool/ResignModal";
import GameInfoModal from "./GameInfo/GameInfoModal";
import SaveAs from "./SaveResignTool/SaveAs";

function GameRootToolbar({
    defs,
    idDict,
    captured,
    capturedIds,
    gameName,
    gameType,
    playerType,
    changeName,
    save,
    resign,
    theme,
}) {
    const [state, setState] = useState({
        miniVariantTool: null,
        clientX: 0,
        clientY: 0,
    });

    const [drag, setDrag] = useState(false);

    const toggleMiniVariantTool = (toolName, clientX, clientY) => {
        if (state.miniVariantTool === toolName) {
            setState({
                miniVariantTool: null,
                clientX: clientX,
                clientY: clientY,
            });
        } else {
            setState({
                miniVariantTool: toolName,
                clientX: clientX,
                clientY: clientY,
            });
        }
    };

    const variants = {
        initial: {
            scale: 0,
            left: state.clientX,
            top: state.clientY,
        },
        animate: {
            scale: 1,
            left: 0,
            top: 48,
        },
        exit: {
            scale: 0,
            left: state.clientX,
            top: state.clientY,
        },
    };

    const classes = useStyles({theme});

    return (
        <>
            <Portal>
                <AnimatePresence>
                    {state.miniVariantTool === "Captured-Pieces" && (
                        <CapturedPiecesModal
                            defs={defs}
                            idDict={idDict}
                            gameType={gameType}
                            captured={captured}
                            capturedIds={capturedIds}
                            onAnimationComplete={() => setDrag(true)}
                            toggleMiniVariantTool={toggleMiniVariantTool}
                            variants={variants}
                            theme={theme}
                        />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {state.miniVariantTool === "Resign" && (
                        <ResignModal
                            resign={resign}
                            toggleMiniVariantTool={toggleMiniVariantTool}
                            onAnimationComplete={() => setDrag(true)}
                            variants={variants}
                            drag={drag}
                            theme={theme}
                        />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {state.miniVariantTool === "Game-Info" && (
                        <GameInfoModal
                            gameName={gameName}
                            gameType={gameType}
                            playerType={playerType}
                            toggleMiniVariantTool={toggleMiniVariantTool}
                            onAnimationComplete={() => setDrag(true)}
                            variants={variants}
                            theme={theme}
                            drag={drag}
                        />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {state.miniVariantTool === "Save" && (
                        <div className={classes.modal}>
                            <GameSavedSuccessfully
                                callback={() => {
                                    save()
                                    toggleMiniVariantTool(null, null, null)
                                }}
                                theme={theme}
                            />
                        </div>
                    )}
                </AnimatePresence>
                {state.miniVariantTool === "Save-As" && (
                    <SaveAs
                        theme={theme}
                        changeName={changeName}
                        save={() => toggleMiniVariantTool("Save", null, null)}
                        close={() => toggleMiniVariantTool("Save-As", null, null)}
                    />
                )}
            </Portal>
            <ToolButton
                text="save"
                name={"Save"}
                iconName={"save_alt"}
                updateParent={toggleMiniVariantTool}
                isActive={state.miniVariantTool === "Save"}
                theme={theme}
            />
            <ToolButton
                name={"Save-As"}
                iconName={"save_as_alt"}
                text="save as"
                theme={theme}
                isActive={
                    state.miniVariantTool === "Save-As"
                }
                updateParent={toggleMiniVariantTool}
            />
            <ToolButton
                name="Game-Info"
                text="Game Info"
                iconName={"game_info"}
                isActive={state.miniVariantTool === "Game-Info"}
                updateParent={toggleMiniVariantTool}
                theme={theme}
            />
            <ToolButton
                name="Captured-Pieces"
                text="Captured Pieces"
                iconName={"captured_pieces"}
                isActive={state.miniVariantTool === "Captured-Pieces"}
                updateParent={toggleMiniVariantTool}
                theme={theme}
            />
            <ToolButton
                name="Resign"
                text="Resign"
                iconName={"resign_alt"}
                isActive={state.miniVariantTool === "Resign"}
                updateParent={toggleMiniVariantTool}
                theme={theme}
            />
        </>
    );
}

export default GameRootToolbar;
