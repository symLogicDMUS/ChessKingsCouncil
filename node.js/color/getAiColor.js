function getAiColor(playerType) {
    /* **/
    if (playerType === "test") {
        return undefined
    }
    if (playerType === "W") {
        return "B"
    }
    if (playerType === "B") {
        return "W"
    }
}

module.exports = getAiColor;

if (require.main === module) {
    getAiColor("test")
}