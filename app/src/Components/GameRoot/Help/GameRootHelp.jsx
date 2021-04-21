import React from "react";
import {PlayingGameHelp} from "./PlayingGameHelp";
import {HelpButtonReminder} from "../../Reuseables/NavBar/Help/HelpButtonReminder";

export const GameRootHelp = (fontSize, theme) => [
    <PlayingGameHelp theme={theme}/>,
    <HelpButtonReminder theme={theme} />
];