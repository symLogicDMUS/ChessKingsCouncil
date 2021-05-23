import React, {createContext} from "react";

export const HelpContext = createContext({
    NewGame: true,
    LoadGame: true,
    CreatePiece: true,
    Customize: true,
    GameRoot: true,
    MyPieces: true,
});