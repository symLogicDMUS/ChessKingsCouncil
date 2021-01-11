import {copy} from "../../helpers/copy";

export function reducer(state, action) {
    let pieces;
    switch (action.type) {
        case "update":
            pieces = copy(state);
            pieces = {
                ...pieces,
                [action.id]: {
                    top: action.top,
                    left: action.left,
                    src: action.src,
                },
            };
            return pieces;
        case "remove":
            pieces = copy(state);
            delete pieces[action.id]
            return pieces;
        default:
            throw new Error();
    }
}