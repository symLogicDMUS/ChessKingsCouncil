const convertOffsetPairsToStrs = require("./convertOffsetPairsToStrs");


function gameDefsOffsetListsToStrs(pieceDefs) {
    /**
     {param piecefunctions { piece functioninitions for a game
     {return { piecefunctions with offsets converted from form [x,y] to form 'x,y'
    */
    for (var name of Object.keys(pieceDefs)) {
        for (var color of ['W', 'B']) {
            pieceDefs[name][color]['offsets'] = convert(pieceDefs[name][color]['offsets'])
        }
    }
    return pieceDefs
}

module.exports = gameDefsOffsetListsToStrs;

if (require.main === module) {
    //TODO: implement test
    console.log(gameDefsOffsetListsToStrs({"EvilMorty": evilMorty, "Octocat": octocat}))
}