import React from "react";
import {CreatePieceHelp} from "../../../CreatePiece/Help/CreatePieceHelp"
import {NewGameHelp} from "../../../NewGame/GameOptions/NewGameHelp"
import {LoadGameHelp} from "../../../LoadGame/LoadGameHelp"
import {GameRootHelp} from "../../../GameRoot/Help/GameRootHelp"
import {NewGameHelpText} from "../../../NewGame/Customize/Help/NewGameHelpText"
import {PieceProfilesHelp} from "../../../PieceProfiles/Help/PieceProfilesHelp";

export const helpTexts = {
    "Home": NewGameHelpText(),
    "New Game": NewGameHelpText(),
    "Load Game": NewGameHelpText(),
    "Create Piece": NewGameHelpText(),
    "Saved Pieces": NewGameHelpText(),
    "Customize": NewGameHelpText(),
}
export const getHelpText = (page, fontSize) => {
}