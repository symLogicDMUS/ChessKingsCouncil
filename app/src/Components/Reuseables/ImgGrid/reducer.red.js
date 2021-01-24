import {getImgItems} from "./getImgItems";

export function reducer(state, action) {
    switch (action.type) {
        case "update":
            return getImgItems(
                action.imgDict,
                action.setChoice,
                action.imgNameChoice,
                action.searchText,
                state.showNames,
                action.screenCase,
                action.theme
            );
        case "toggle-show-names":
            return {...state, showNames: !state.showNames};
        default:
            throw new Error();
    }
}