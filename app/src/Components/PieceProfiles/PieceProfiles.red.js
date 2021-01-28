import {copy} from "../helpers/copy";

export const reducer = (state, action) => {
    switch (action.type) {
        case 'load':
            // payload == defs
            return action.payload;
        case 'delete':
            const defs = copy(state)
            //payload == pieceName
            delete defs[action.payload]
            return defs;
        default:
            return {}
    }
}