import React, { useState } from "react";
import { stylesObjects } from "../create-piece-styles-objects";
import { Toolbar } from "./Toolbar";
import "../scss/ToolsMenuMobile/ToolsMenuMobile.scss";

export function ToolsMenuMobile({notifyParent}) {
    let [toolHeight, setToolHeight] = useState(1);
    let [colapsedAll, setColapsedAll] = useState(true);
    let [selectedTool, setSelectedTool] = useState(null);

    function togleExpand(toolName) {
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
        <div className="tools-menu" style={stylesObjects["mobile"]["ToolsMenu"]()}>
            {(colapsedAll || selectedTool === "name") && (
                <Toolbar togleExpand={togleExpand} toolName="name" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
            {(colapsedAll || selectedTool === "icon") && (
                <Toolbar togleExpand={togleExpand} toolName="icon" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
            {(colapsedAll || selectedTool === "range") && (
                <Toolbar togleExpand={togleExpand} toolName="range" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
            {(colapsedAll || selectedTool === "location") && (
                <Toolbar togleExpand={togleExpand} toolName="location" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
            {(colapsedAll || selectedTool === "options") && (
                <Toolbar togleExpand={togleExpand} toolName="options" toolHeight={toolHeight} selectedTool={selectedTool} />
            )}
        </div>
    );
}
