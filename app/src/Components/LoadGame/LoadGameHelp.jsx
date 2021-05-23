import React from "react";
import {GameImageGridExplained} from "./GameSnapshot/GameImageGridExplained";
import {HelpButtonReminder} from "../Reuseables/NavBar/Help/HelpButtonReminder";

export const LoadGameHelp = (theme) => ([
     <GameImageGridExplained theme={theme}/>,
    <HelpButtonReminder theme={theme} />
]);
