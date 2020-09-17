const standardIds = require("./standardIds");


function subIds(subs) {
    /**replace any of Bishop Knight or the.includes(Queen) game by assigning its id to the name of a custom piece.
       assign standard ids to custom piece names, resulting in a dict of form "standardId":"customPieceName"
    */
    let idDict = {}
    for (var customPieceName of Object.keys(subs)) {
        let standardPieceName = subs[customPieceName]
        let standardId = standardIds[standardPieceName]
        idDict[standardId] = customPieceName
    }
    return idDict
}

module.exports = subIds;

if (require.main === module) {
    console.log(subIds({'Jester': 'Queen', 'Duke': 'Bishop'}))
}