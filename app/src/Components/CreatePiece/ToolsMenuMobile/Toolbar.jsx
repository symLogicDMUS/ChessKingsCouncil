import React, { useState } from "react";
import { motion } from "framer-motion";
import "../scss/ToolsMenuMobile/ToolsMenuMobile.scss";

export function Toolbar({ togleExpand, toolName, toolHeight, selectedTool }) {
    var toolClass = `tools-menu-${toolName}`;
    var widgetClass = `${toolName}-expand-widget`;
    if (toolName === selectedTool) {
        toolClass = "tool-bar-selected";
        widgetClass = "tool-bar-selected-widget";
    }

    const widgetType = selectedTool ? "colapse" : "expand";

    return (
        <>
            <motion.div className={toolClass} animate={{ scaleY: toolHeight }} />
            <img
                className={widgetClass}
                src={`/Images/${widgetType}/${widgetType}-a9a9a9.svg`}
                onClick={() => togleExpand(toolName)}
            />
        </>
    );
}
