import Rankfile from "../types/Rankfile";

export function getEmptySqrsOnPath(coordPath: Rankfile [], pieceLocs: Rankfile []) {
    const emptySqrs = [];
    for (let rf of coordPath) {
        if (!pieceLocs.includes(rf)) emptySqrs.push(rf);
    }
    return emptySqrs;
}

