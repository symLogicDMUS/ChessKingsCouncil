import {queenSideCastlePaths} from "./queenSideCastlePaths";


export function getQueenSideCastlePaths(color) {
    /*use the target square of the castle move to get the squares on castle path**/
    return queenSideCastlePaths[color]
}

// module.exports = getQueenSideCastlePaths;

/** for node.js
if (require.main === module) {
    console.log('W')
    console.log(getQueenSideCastlePaths('W'))
    console.log('B')
    console.log(getQueenSideCastlePaths('B'))

}
*/