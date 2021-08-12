import React, { useMemo } from "react";
import { getGameSnapshots } from "./getGameSnapshots";
import { getBoardObjs } from "../getBoardObjs";

function GameSnapshots(props) {
    const boardObjs = useMemo(
        () => getBoardObjs(props.games, props.theme),
        [
            props.theme,
            Object.keys(props.games).length,
            props.selectedGame,
            props.useChoseGame,
            props.loaded,
            props.searchText,
            props.showNames,
        ]
    );
    return (
        <>
            {getGameSnapshots(
                boardObjs,
                props.setChoice,
                props.selectedGame,
                props.searchText,
                props.showNames,
                props.theme
            )}
        </>
    );
}

export default GameSnapshots;
