import React, {useState} from "react";
import {Portal} from "@material-ui/core";
import SubsModal from "./SubsModal";
import PromosModal from "./PromosModal";
import PiecesModal from "./PiecesModal";
import {AnimatePresence} from "framer-motion";
import ToolButton from "../../Reuseables/Clickables/ToolButton";

function CustomizeToolbar({subs, promos, pieceNames, theme}) {

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
                    {state.miniVariantTool === "Subs" && (
                        <SubsModal
                            toggleMiniVariantTool={toggleMiniVariantTool}
                            onAnimationComplete={() => setDrag(true)}
                            variants={variants}
                            drag={drag}
                            theme={theme}
                        >
                            {subs}
                        </SubsModal>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {state.miniVariantTool === "Promos" && (
                        <PromosModal
                            toggleMiniVariantTool={toggleMiniVariantTool}
                            onAnimationComplete={() => setDrag(true)}
                            variants={variants}
                            drag={drag}
                            theme={theme}
                        >
                            {promos}
                        </PromosModal>
                    )}
                </AnimatePresence>
            </Portal>
            <ToolButton
                name="Subs"
                iconName="subs"
                text="Sub List"
                isActive={state.miniVariantTool === "Subs"}
                updateParent={toggleMiniVariantTool}
                theme={theme}
            />
            <ToolButton
                name="Promos"
                iconName="promos"
                text="Pawn Promotion List"
                isActive={state.miniVariantTool === "Promos"}
                updateParent={toggleMiniVariantTool}
                theme={theme}

            />
        </>
    )
}

export default CustomizeToolbar;