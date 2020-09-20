import {convertOffsetPairsToStrs} from "./convertOffsetPairsToStrs";


export function gameDefsOffsetListsToStrs(pieceDefs) {
    /**
     {param piecefunctions { piece functioninitions for a game
     {return { piecefunctions with offsets converted from form [x,y] to form 'x,y'
    */
    var pieceDefsForDb = JSON.parse(JSON.stringify(pieceDefs))
    for (var name of Object.keys(pieceDefsForDb)) {
        for (var color of ['W', 'B']) {
            pieceDefsForDb[name][color]['offsets'] = convertOffsetPairsToStrs(pieceDefs[name][color]['offsets'])
        }
    }
    return pieceDefsForDb
}

// module.exports = gameDefsOffsetListsToStrs;

/** for node.js
if (require.main === module) {
    //TODO: implement test
    console.log(gameDefsOffsetListsToStrs({"EvilMorty": evilMorty, "Octocat": octocat}))

}
*/