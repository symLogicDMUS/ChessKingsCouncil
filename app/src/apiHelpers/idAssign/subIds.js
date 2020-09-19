import {standardIds} from "./standardIds";


export function subIds(subs) {
    /**replace any of Bishop Knight or the.includes(Queen) game by assigning its id to the name of a custom piece.
       assign standard ids to custom piece names, resulting in a dict of form "standardId":"customPieceName"
    */
    var idDict = {}
    var standardPieceName, standardId;
    for (var customPieceName of Object.keys(subs)) {
        standardPieceName = subs[customPieceName]
        standardId = standardIds[standardPieceName]
        idDict[standardId] = customPieceName
    }
    return idDict
}

// module.exports = subIds;

/** for node.js
if (require.main === module) {
    console.log(subIds({'Jester': 'Queen', 'Duke': 'Bishop'}))

}
*/