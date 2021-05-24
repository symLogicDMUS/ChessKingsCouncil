export function reducer(state, action) {
    switch (action.type) {
        case "logged-in":
            const user = action.user;
            return {
                ...state,
                uid: user.uid,
                isSignedIn: !!user,
                isAnonymous: user.isAnonymous
            }
        case "logged-out":
            return {
                ...state,
                uid: null,
                isSignedIn: false,
                isAnonymous: false
            }
        case "update-theme":
            return {
                ...state,
                themes: {
                    ...state.themes,
                    [action.pageName]: action.theme
                }
            }
        case "set-themes":
            return {
                ...state,
                themes: action.themes
            }
        case "reset-default-themes":
            return {
                ...state,
                themes: {
                    newGame: "tan",
                    loadGame: "tan",
                    createPiece: "dark",
                    customize: "dark",
                    gameRoot: "dark",
                    myPieces: "dark",
                    councilRules: "tan",
                    home: "tan",
                }
            }
        case "update-help":
            return {
                ...state,
                help: {
                    ...state.help,
                    [action.pageName]: action.value,
                }
            }
        case "disable-help":
            return {
                ...state,
                help: {
                    NewGame: true,
                    LoadGame: true,
                    CreatePiece: true,
                    Customize: true,
                    GameRoot: true,
                    MyPieces: true,
                    firstSave: true,
                }
            }
        default:
            throw new Error();
    }
}