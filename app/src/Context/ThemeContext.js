import React, {createContext} from "react";

export const ThemeContext = createContext({
    newGame: 'tan',
    loadGame: 'tan',
    createPiece: 'dark',
    customize: 'dark',
    gameRoot: 'dark',
    myPieces: 'dark',
    councilRules: 'tan',
    home: 'tan',
});