import React, { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ResignModal from "./SaveResignTool/ResignModal";
import GameInfoModal from "./GameInfo/GameInfoModal";
import AskLoginButton from "../Home/Sign In/AskLoginButton";
import { UserContext } from "../../Context/UserContext";
import SaveAs from "./SaveResignTool/SaveAs";
import SvgIcon from "@material-ui/core/SvgIcon";
import {icons} from "../styles/icons/top/icons.jss";
import {SeeMore} from "../Reuseables/UserInput/SeeMore";
import {MuiSwitch} from "../Reuseables/Clickables/MuiSwitch";
import {RangeAnalysisSwitch} from "./Title/RangeAnalysisSwitch";
import ToolButton from "../Reuseables/MiniVariantTool/ToolButton";
import CapturedPiecesModal from "./CapturedPieceImg/CapturedPiecesModal";
import {ToolBackdrop} from "../Reuseables/MiniVariantTool/ToolBackdrop";
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

    const classes = useStyles({theme});

    const [activeTool, setActiveTool] = useState(null);

    const toggleMiniVariantTool = (toolName) => {
        if (activeTool === toolName) {
            setActiveTool(null);
        } else {
            setActiveTool(toolName);
        }
    };

    return (
        <>
            {(
                activeTool === "Captured-Pieces"
                || activeTool === "Resign"
                || activeTool === "Game-Info"
            ) && (
                <ToolBackdrop onClick={() => toggleMiniVariantTool(null)} />
            )}
            <AnimatePresence>
                {activeTool === "Captured-Pieces" && (
                    <CapturedPiecesModal
                        key={'captured-pieces'}
                        defs={defs}
                        idDict={idDict}
                        gameType={gameType}
                        captured={captured}
                        capturedIds={capturedIds}
                        theme={theme}
                    />
                )}
                {activeTool === "Resign" && (
                    <ResignModal
                        key={'resign-modal'}
                        theme={theme}
                        resign={resign}
                        toggleMiniVariantTool={toggleMiniVariantTool}
                    />
                )}
                {activeTool === "Game-Info" && (
                    <GameInfoModal
                        key={'game-info-modal'}
                        gameName={gameName}
                        gameType={gameType}
                        playerType={playerType}
                        theme={theme}
                    />
                )}
            </AnimatePresence>
            {activeTool === "Save-As" && (
                <SaveAs
                    theme={theme}
                    changeName={changeName}
                    save={() => {
                        save();
                        toggleMiniVariantTool(null);
                    }}
                    close={() => toggleMiniVariantTool(null)}
                />
            )}
            {uid ? (
                <ToolButton
                    text="save as"
                    theme={theme}
                    iconName={"save_as_alt"}
                    isActive={activeTool === "Save-As"}
                    onClick={() => toggleMiniVariantTool("Save-As")}
                />
            ) : (
                <AskLoginButton
                    theme={theme}
                    text={"Save As"}
                    iconName={"save_as_alt"}
                    isGameOption={true}
                />
            )}
            <ToolButton
                text="Game Info"
                iconName={"game_info"}
                isActive={activeTool === "Game-Info"}
                onClick={() => toggleMiniVariantTool("Game-Info")}
                theme={theme}
            />
            <ToolButton
                text="Captured Pieces"
                iconName={"captured_pieces"}
                isActive={activeTool === "Captured-Pieces"}
                onClick={() => toggleMiniVariantTool("Captured-Pieces")}
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
                isActive={activeTool === "Resign"}
                onClick={() => toggleMiniVariantTool("Resign")}
                theme={theme}
            />
        </>
    );
}

export default GameRootToolbar;
