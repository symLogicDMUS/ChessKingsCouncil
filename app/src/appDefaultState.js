import { defaultThemes } from "./defaultThemes";

export const appDefaultState = {
    uid: null,
    isSignedIn: false,
    isAnonymous: false,
    themes: defaultThemes,
    themeIndex: 0, // home page rotation
    help: {
        NewGame: true,
        LoadGame: true,
        CreatePiece: true,
        Customize: true,
        GameRoot: true,
        MyPieces: true,
        firstSave: true,
    },
};
