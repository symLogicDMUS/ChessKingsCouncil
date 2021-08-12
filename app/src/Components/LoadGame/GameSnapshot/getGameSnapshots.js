import React from "react";
import { GameSnapshot } from "./GameSnapshot";

export function getGameSnapshots(
    boardObjs,
    setChoice,
    gameChoice,
    searchText,
    showNames,
    theme
) {
    let gameNames;
    if (searchText && searchText !== "") {
        gameNames = Object.keys(boardObjs).filter((name) =>
            name.toLowerCase().startsWith(searchText)
        );
    } else {
        gameNames = Object.keys(boardObjs);
    }
    const gameSnapshots = [];
    gameNames.forEach((name) => {
        gameSnapshots.push(
            <GameSnapshot
                key={name}
                name={name}
                theme={theme}
                showName={showNames}
                setChoice={setChoice}
                boardObj={boardObjs[name]}
                isSelected={name === gameChoice}
            />
        );
    });
    return gameSnapshots;
}
