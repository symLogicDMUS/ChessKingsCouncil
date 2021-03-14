import React from "react";
import {HelpText} from "../../../CreatePiece/Help/HelpText"
import {HelpText} from "../../../NewGame/GameOptions/HelpText"
import {HelpText} from "../../../LoadGame/HelpText"
import {HelpText} from "../../../GameRoot/Help/HelpText"
import {HelpText} from "../../../NewGame/Customize/Help/HelpText"
import {ProfileHelpText} from "../../../PieceProfiles/Help/ProfileHelpText";

export const helpTexts = {
    "Home": HelpText(),
    "New Game": HelpText(),
    "Load Game": HelpText(),
    "Create Piece": HelpText(),
    "Saved Pieces": HelpText(),
    "Customize": HelpText(),
}
export const getHelpText = (page, fontSize) => {
}