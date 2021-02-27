import {copy} from "../helpers/copy";
import {getRangeBoardImgStrs} from "./ProfileWB/getRangeBoardImgStrs";

export const reducer = (state, action) => {
    switch (action.type) {
        case 'load':
            // payload == sampleDefs
            return {loaded: true, defs: action.payload}
        case 'delete':
            const defs = copy(state.defs)
            //payload == pieceName
            delete defs[action.payload]
            return {...state, defs: defs};
        case 'update-range-boards':
            return {...state, defs: getRangeBoardImgStrs(action.theme, copy(state.defs))}
        default:
            return {}
    }
}