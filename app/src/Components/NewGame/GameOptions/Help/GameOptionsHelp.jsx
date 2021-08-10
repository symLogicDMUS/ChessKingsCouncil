import React from "react";
import { HelpButtonReminder } from "../../../Reuseables/NavBar/Help/HelpButtonReminder";
import { PlayerTypeText } from "./PlayerTypeText";
import { GameTypesText } from "./GameTypesText";
import { GameNameText } from "./GameNameText";

export const GameOptionsHelp = (theme) => [
    <GameNameText key="new-game-help" theme={theme} />,
    <GameTypesText key="game-types-text" theme={theme} />,
    <PlayerTypeText key="player-types-paragraph" theme={theme} />,
    <HelpButtonReminder key="help-button" theme={theme} />,
];
