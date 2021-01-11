import {copy} from "../../../helpers/copy";

/**
 * dropLayer for the game board
 * @param state: a record of pieces, their id and img src.
 * @param action: either delete a piece or update its position.
 * @returns {*}
 */
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