import React, { useState } from "react";
import { motion } from "framer-motion";
import {useStyles} from "./ToolsMenuMoblie.jss";

export function Toolbar({ toggleExpand, toolName, toolHeight, selectedTool }) {

    const classes = useStyles()

    let className = classes[toolName]
    let widgetType = 'expand'
    if (toolName === selectedTool) {
        className = classes.selected_tool
        widgetType = 'colapse'
    }

    return (
        <>
            <motion.div className={} animate={{ scaleY: toolHeight }} />
            <img
                className={classes[toolName].widget}
                src={`/Images/${widgetType}/${widgetType}-a9a9a9.svg`}
                onClick={() => toggleExpand(toolName)}
            />
        </>
    );
}
