import { convertOffsetStrsToPairs } from "./convertOffsetStrsToPairs";

export function mapDefs(defs) {
    /* **/
    for (const pieceName of Object.keys(defs)) {
        for (const color of ["W", "B"]) {
            defs[pieceName][color]["offsets"] = convertOffsetStrsToPairs(
                defs[pieceName][color]["offsets"]
            );
        }
    }
    return defs;
}
