export const toggleMiniVariantTool = (state, toolName, activeTool) => {
    if (activeTool === toolName) {
        return {
            ...state,
            activeTool: null,
        };
    } else {
        return {
            ...state,
            activeTool: toolName,
        };
    }
};
