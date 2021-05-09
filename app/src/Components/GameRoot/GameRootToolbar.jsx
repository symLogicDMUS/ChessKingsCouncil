import React, { useContext, useState } from "react";
import {ListItem, ListItemIcon, ListItemText, Portal} from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import CapturedPiecesModal from "./CapturedPieceImg/CapturedPiecesModal";
import ToolButton from "../Reuseables/Clickables/ToolButton";
import ResignModal from "./SaveResignTool/ResignModal";
import GameInfoModal from "./GameInfo/GameInfoModal";
import AskLoginButton from "../Home/AskLoginButton";
import { UserContext } from "../../UserContext";
import SaveAs from "./SaveResignTool/SaveAs";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../styles/icons/top/icons.jss";
import {SeeMore} from "../Reuseables/UserInput/SeeMore";
import {MuiSwitch} from "../Reuseables/Clickables/MuiSwitch";
import {RangeAnalysisSwitch} from "./Title/RangeAnalysisSwitch";
import { useStyles as useMoreStyles } from "../Reuseables/Animations/AnimatePresencePortal.jss";
import {useStyles} from "./GameRootToolbar.jss";

function GameRootToolbar({
    defs,
    idDict,
    captured,
    capturedIds,
    gameName,
    gameType,
    playerType,
    changeName,
    onChange,
    save,
    resign,
    theme,
}) {
    const uid = useContext(UserContext);

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
    const classes2 = useMoreStyles({ theme });

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
                {state.miniVariantTool === "Save-As" && (
                    <SaveAs
                        theme={theme}
                        changeName={changeName}
                        save={() => {
                            save();
                            toggleMiniVariantTool(null, null, null);
                        }}
                        close={() => toggleMiniVariantTool(null, null, null)}
                    />
                )}
            </Portal>
            {uid ? (
                <ToolButton
                    name={"Save-As"}
                    iconName={"save_as_alt"}
                    text="save as"
                    theme={theme}
                    isActive={state.miniVariantTool === "Save-As"}
                    updateParent={toggleMiniVariantTool}
                />
            ) : (
                <AskLoginButton theme={theme} iconName={"save_as_alt"} text={"Save As"} />
            )}
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
            <SeeMore
                theme={theme}
                icon={
                    <SvgIcon className={classes.icon2}>
                        {icons.board_icon}
                    </SvgIcon>
                }
                listItem={true}
                text='Range Analysis'
            >
                <MuiSwitch
                    theme={theme}
                    control={<RangeAnalysisSwitch theme={theme} onChange={onChange} />}
                    labelPlacement={'start'}
                >
                    Range Analysis
                </MuiSwitch>
            </SeeMore>
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
