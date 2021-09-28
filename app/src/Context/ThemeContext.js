import React, { createContext } from "react";

export const ThemeContext = createContext({
    newGame: "nba",
    loadGame: "nba",
    createPiece: "dark",
    customize: "dark",
    gameRoot: "dark",
    myPieces: "dark",
    councilRules: "tan",
    home: "nba",
});
