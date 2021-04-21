import React from "react";
import {PieceProfilesHelp} from "../../../PieceProfiles/Help/PieceProfilesHelp";
import {HelpButtonReminder} from "../../../Reuseables/NavBar/Help/HelpButtonReminder";
import {CustomizeHelp} from "./CustomizeHelp";

export const NewGameHelpText = (theme) => ([
     <CustomizeHelp theme={theme}/>,
    <PieceProfilesHelp theme={theme}/>,
    <HelpButtonReminder theme={theme} />
]);