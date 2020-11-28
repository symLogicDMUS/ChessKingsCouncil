import React, { useState } from "react";
import { Toolbar } from "./Toolbar";
import {useStyles} from "./ToolsMenuMoblie.jss";

export function ToolsMenuMobile({notifyParent}) {
    let [toolHeight, setToolHeight] = useState(1);
    let [colapsedAll, setColapsedAll] = useState(true);
    let [selectedTool, setSelectedTool] = useState(null);

    const classes = useStyles()

    function toggleExpand(toolName) {
        if (colapsedAll) {
            setColapsedAll(false);
            setSelectedTool(toolName);
            notifyParent(toolName)
            setToolHeight(5);
        } else {
            setSelectedTool(null);
            notifyParent(null);
            setToolHeight(1);
            setColapsedAll(true);
        }
    }

    return (
        <div className={classes.tools_menu}>
            {(colapsedAll || selectedTool === "name") && (
                <Toolbar toggleExpand={toggleExpand} toolName="name" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
            {(colapsedAll || selectedTool === "icon") && (
                <Toolbar toggleExpand={toggleExpand} toolName="icon" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
            {(colapsedAll || selectedTool === "range") && (
                <Toolbar toggleExpand={toggleExpand} toolName="range" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
            {(colapsedAll || selectedTool === "location") && (
                <Toolbar toggleExpand={toggleExpand} toolName="location" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
            {(colapsedAll || selectedTool === "options") && (
                <Toolbar toggleExpand={toggleExpand} toolName="options" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
        </div>
    );
}
