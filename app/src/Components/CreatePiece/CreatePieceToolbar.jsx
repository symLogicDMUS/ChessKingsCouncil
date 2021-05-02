import React, { useState } from "react";
import NameModal from "./Name/NameModal";
import IconModal from "./Icon/IconModal";
import { Portal } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import ToolButton from "../Reuseables/Clickables/ToolButton";

function CreatePieceToolbar({
    pieceName,
    updateName,
    whiteAndBlackImgs,
    setNewPieceImg,
    resetImg,
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

    return (
        <>
            <Portal>
                <AnimatePresence>
                    {state.miniVariantTool === "Name" && (
                        <NameModal
                            pieceName={pieceName}
                            updateName={updateName}
                            updateParent={toggleMiniVariantTool}
                            onAnimationComplete={() => setDrag(true)}
                            variants={variants}
                            theme={theme}
                            drag={drag}
                        />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {state.miniVariantTool === "Icon" && (
                        <IconModal
                            resetImg={resetImg}
                            setNewPieceImg={setNewPieceImg}
                            whiteAndBlackImgs={whiteAndBlackImgs}
                            toggleMiniVariantTool={toggleMiniVariantTool}
                            onAnimationComplete={() => setDrag(true)}
                            variants={variants}
                            theme={theme}
                            drag={drag}
                        />
                    )}
                </AnimatePresence>
            </Portal>
            <ToolButton
                text="Name"
                name="Name"
                theme={theme}
                iconName={"name_tool"}
                updateParent={toggleMiniVariantTool}
                isActive={state.miniVariantTool === "Name"}
                clientY={48}
            />
            <ToolButton
                text="Icon"
                name="Icon"
                theme={theme}
                iconName={"icon_tool"}
                updateParent={toggleMiniVariantTool}
                isActive={state.miniVariantTool === "Icon"}
                clientY={0}
            />
        </>
    );
}

export default CreatePieceToolbar;
