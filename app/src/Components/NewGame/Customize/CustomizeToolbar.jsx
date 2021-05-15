import React, {useState} from "react";
import {Portal} from "@material-ui/core";
import {AnimatePresence} from "framer-motion";
import SubsModal from "./SubsModal";
import PromosModal from "./PromosModal";
import ToolButton from "../../Reuseables/Clickables/ToolButton";
import {ToolBackdrop} from "../../Reuseables/Clickables/ToolBackdrop";


function CustomizeToolbar({subs, promos, theme}) {

    const [activeTool, setActiveTool] = useState(null);

    const toggleActiveTool = (toolName) => {
        if (activeTool === toolName) {
            setActiveTool(null);
        } else {
            setActiveTool(toolName);
        }
    };

    return (
        <>
            <Portal>
                <AnimatePresence>
                    {activeTool === "Subs" && (
                        <SubsModal
                            key='subs-modal'
                            theme={theme}
                        >
                            {subs}
                        </SubsModal>
                    )}
                    {activeTool === "Promos" && (
                        <PromosModal
                            key='promos-modal'
                            theme={theme}
                        >
                            {promos}
                        </PromosModal>
                    )}
                    {!!activeTool && (
                        <ToolBackdrop onClick={() => setActiveTool(null)} />
                    )}
                </AnimatePresence>
            </Portal>
            <ToolButton
                name="Subs"
                iconName="subs"
                text="Sub List"
                isActive={activeTool === "Subs"}
                onClick={() => toggleActiveTool("Subs")}
                theme={theme}
            />
            <ToolButton
                name="Promos"
                iconName="promos"
                text="Pawn Promotion List"
                isActive={activeTool === "Promos"}
                onClick={() => toggleActiveTool("Promos")}
                theme={theme}
            />
        </>
    )
}

export default CustomizeToolbar;