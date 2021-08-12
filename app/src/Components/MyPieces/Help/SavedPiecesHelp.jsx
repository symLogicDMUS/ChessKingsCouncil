import React from "react";
import { PieceProfilesHelp } from "../../PieceProfiles/Help/PieceProfilesHelp";
import { HelpButtonReminder } from "../../Reuseables/NavBar/Help/HelpButtonReminder";
import { LoadingAndDeletingPiecesHelp } from "./LoadingAndDeletingPiecesHelp";

export const SavedPiecesHelp = (theme) => [
    <LoadingAndDeletingPiecesHelp theme={theme} />,
    <PieceProfilesHelp theme={theme} />,
    <HelpButtonReminder theme={theme} />,
];
