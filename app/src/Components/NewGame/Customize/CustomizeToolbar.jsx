import React, { useState } from "react";
import SubsModal from "./SubsModal";
import PromosModal from "./PromosModal";
import { AnimatePresence } from "framer-motion";
import ToolButton from "../../Reuseables/MiniVariantTool/ToolButton";
import { ToolBackdrop } from "../../Reuseables/MiniVariantTool/ToolBackdrop";

function CustomizeToolbar({ subs, promos, theme }) {
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
            <AnimatePresence>
                {activeTool === "Subs" && (
                    <SubsModal key="subs-modal" theme={theme}>
                        {subs}
                    </SubsModal>
                )}
                {activeTool === "Promos" && (
                    <PromosModal key="promos-modal" theme={theme}>
                        {promos}
                    </PromosModal>
                )}
            </AnimatePresence>
            {(activeTool === "Subs" || activeTool === "Promos") && (
                <ToolBackdrop
                    key="backdrop"
                    onClick={() => setActiveTool(null)}
                />
            )}
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
    );
}

export default CustomizeToolbar;
