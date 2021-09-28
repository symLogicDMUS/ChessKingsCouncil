import { defaultThemes } from "./defaultThemes";

export function reducer(state, action) {
    switch (action.type) {
        case "logged-in":
            const user = action.user;
            return {
                ...state,
                uid: user.uid,
                isSignedIn: !!user,
                isAnonymous: user.isAnonymous,
            };
        case "logged-out":
            return {
                ...state,
                uid: null,
                isSignedIn: false,
                isAnonymous: false,
            };
        case "update-theme":
            return {
                ...state,
                themes: {
                    ...state.themes,
                    [action.pageName]: action.theme,
                },
            };
        case "set-themes":
            return {
                ...state,
                themes: action.themes,
            };
        case "reset-default-themes":
            return {
                ...state,
                themes: defaultThemes,
            };
        case "set-unified-theme":
            return {
                ...state,
                themes: {
                    newGame: action.theme,
                    loadGame: action.theme,
                    createPiece: action.theme,
                    customize: action.theme,
                    gameRoot: action.theme,
                    myPieces: action.theme,
                    councilRules: action.theme,
                    home: action.theme,
                },
            };
        case "update-help":
            return {
                ...state,
                help: {
                    ...state.help,
                    [action.pageName]: action.value,
                },
            };
        case "disable-help":
            return {
                ...state,
                help: {
                    NewGame: false,
                    LoadGame: false,
                    CreatePiece: false,
                    Customize: false,
                    GameRoot: false,
                    MyPieces: false,
                    firstSave: false,
                },
            };
        default:
            throw new Error();
    }
}
