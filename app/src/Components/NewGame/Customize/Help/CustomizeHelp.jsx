import React from "react";
import { PieceProfilesHelp } from "../../../PieceProfiles/Help/PieceProfilesHelp";
import { HelpButtonReminder } from "../../../Reuseables/NavBar/Help/HelpButtonReminder";
import { PromosAndSubs } from "./PromosAndSubs";

export const CustomizeHelp = (theme) => [
    <PromosAndSubs theme={theme} />,
    <PieceProfilesHelp theme={theme} />,
    <HelpButtonReminder theme={theme} />,
];
