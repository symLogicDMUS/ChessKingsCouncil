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
        default:
            throw new Error();
    }
}