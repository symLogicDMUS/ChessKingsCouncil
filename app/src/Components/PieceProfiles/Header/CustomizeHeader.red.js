import {themes} from "../../styles/themes/themes.jss";

export function reducer(state, action) {
    switch (action.type) {
        case "sub":
            const newColors = {Queen: '', Rook: '', Bishop: '', Knight: ''}
            for (let piece of Object.keys(newColors)) {
                if (action.newReplaced === piece) {
                    newColors[piece] = themes[action.theme].text;
                } else {
                    newColors[piece] = 'none';
                }
            }
            return {subSelection: action.newReplaced, colors: newColors}
        case "no-sub":
            return {
                subSelection: null,
                colors: {
                    Queen: themes[action.theme].outline,
                    Rook: themes[action.theme].outline,
                    Bishop: themes[action.theme].outline,
                    Knight: themes[action.theme].outline,
                    noSymbol: themes[action.theme].text,
                }
            }
        default:
            throw new Error();
    }
}