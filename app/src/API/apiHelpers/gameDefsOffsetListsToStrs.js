import { convertOffsetPairsToStrs } from "./convertOffsetPairsToStrs";

export function gameDefsOffsetListsToStrs(pieceDefs) {
    /**
     {param piecefunctions { piece functioninitions for a game
     {return { piecefunctions with offsets converted from form [x,y] to form 'x,y'
     */
    const pieceDefsForDb = JSON.parse(JSON.stringify(pieceDefs));
    for (const name of Object.keys(pieceDefsForDb)) {
        for (const color of ["W", "B"]) {
            pieceDefsForDb[name][color]["offsets"] = convertOffsetPairsToStrs(
                pieceDefs[name][color]["offsets"]
            );
        }
    }
    return pieceDefsForDb;
}
