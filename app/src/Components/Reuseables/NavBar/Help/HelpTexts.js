import React from "react";
import {CreatePieceHelp} from "../../../CreatePiece/Help/CreatePieceHelp"
import {GameOptionsHelp} from "../../../NewGame/GameOptions/Help/GameOptionsHelp"
import {LoadGameHelp} from "../../../LoadGame/LoadGameHelp"
import {GameRootHelp} from "../../../GameRoot/Help/GameRootHelp"
import {CustomizeHelp} from "../../../NewGame/Customize/Help/CustomizeHelp"
import {PieceProfilesHelp} from "../../../PieceProfiles/Help/PieceProfilesHelp";

export const helpTexts = {
    "Home": CustomizeHelp(),
    "New Game": CustomizeHelp(),
    "Load Game": CustomizeHelp(),
    "Create Piece": CustomizeHelp(),
    "Saved Pieces": CustomizeHelp(),
    "Customize": CustomizeHelp(),
}
export const getHelpText = (page, fontSize) => {
}