import React from "react";
import { GameplayText } from "./GameplayText";
import { SavingAGame } from "./SavingAGame";
import { GameInfoText } from "./GameInfoText";
import { RangeAnalysisExample } from "./RangeAnalysisExample";
import { HelpButtonReminder } from "../../Reuseables/NavBar/Help/HelpButtonReminder";

export const PlayingGameHelp = (theme) => [
    <GameplayText theme={theme} />,
    <GameInfoText theme={theme} />,
    <SavingAGame theme={theme} />,
    <RangeAnalysisExample theme={theme} />,
    <HelpButtonReminder theme={theme} />,
];
