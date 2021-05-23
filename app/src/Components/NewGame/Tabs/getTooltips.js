export function getTooltips(gameName, gameType, playerType) {
    let gameNameTooltipTitle = "";
    if (gameName) {
        gameNameTooltipTitle = "Game Name" + " (" + gameName + ")";
    }

    let gameTypeTooltipTitle = "";
    if (gameType) {
        gameTypeTooltipTitle = "Pick Type" + " (" + gameType + ")";
    }

    let playerTypeTooltipTitle = "";
    if (playerType) {
        playerTypeTooltipTitle = "Play As" + " (" + playerType + ")";
    }
    return {gameNameTooltipTitle, gameTypeTooltipTitle, playerTypeTooltipTitle};
}