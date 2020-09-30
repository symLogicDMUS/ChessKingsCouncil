import {piece_defs as standardDefs} from "../Components/NewGame/NewData";

export function initStandardDefs(defs) {

    for (var pieceName of Object.keys(standardDefs)) {
        if (! Object.keys(defs).includes(pieceName)) {
            defs[pieceName] = standardDefs[pieceName]
        }
    }

    return defs;
}