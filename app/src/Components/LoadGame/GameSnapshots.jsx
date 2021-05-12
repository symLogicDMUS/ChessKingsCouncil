import React from "react";
import {getGameSnapshots} from "./getGameSnapshots";

function GameSnapshots(props) {
    return (
        <>
            {
                getGameSnapshots(
                    props.boardObjs,
                    props.setChoice,
                    props.selectedGame,
                    props.searchText,
                    props.showNames,
                    props.theme
                )
            }
        </>
    );
}

export default GameSnapshots;