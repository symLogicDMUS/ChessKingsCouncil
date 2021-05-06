import {mapTupleStrsToArrays} from "./mapTupleStrsToArrays";
import {copy} from "../../Components/helpers/copy";

export function refactorDefOffsets(defs) {
    const newDefs = copy(defs);
    const colors = ['W', 'B'];
    for (const pieceName of Object.keys(newDefs)) {
        for (const color of colors) {
            if (newDefs[pieceName][color].offsets) {
                newDefs[pieceName][color].offsets = mapTupleStrsToArrays(newDefs[pieceName][color].offsets)
            } else {
                newDefs[pieceName][color].offsets = [];
            }
        }
    }
    return newDefs;
}