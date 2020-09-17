import {getStandardPieceDefs} from "gameLogic/testObjects/getStandardPieceDefs";


export function getRangeInstance(rangefunctions, pieceName, color, rangeType) {
    /*get range of rangeType of the piece named pieceName of enemy color**/
    return rangeDefs[pieceName][color][rangeType]
}

// module.exports = getRangeInstance;

/** for node.js
if (require.main === module) {
    let rangeDefs = getStandardPieceDefs()
    console.log(getRangeInstance(rangeDefs, "Rook", "W", "spans"))
    console.log(getRangeInstance(rangeDefs, "Rook", "W", "offsets"))
    console.log(getRangeInstance(rangeDefs, "Queen", "B", "spans"))
    console.log(getRangeInstance(rangeDefs, "Queen", "B", "offsets"))

}
*/