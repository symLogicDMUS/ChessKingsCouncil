export const getHasFabChild = (rf, pieceLoc, miniVariantTool) => {
    if (miniVariantTool === "Range") {
        if (pieceLoc === "d4" && rf === "f6") {
            return true;
        }
        if (pieceLoc === "d5" && rf === "f7") {
            return true;
        }
        if (pieceLoc === "e4" && rf === "g6") {
            return true;
        }
        if (pieceLoc === "e5" && rf === "g7") {
            return true;
        }
        return false;
    }
    if (miniVariantTool === "Location") {
        return rf === "f6";
    }
    return false;
};
