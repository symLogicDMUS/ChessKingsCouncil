import {kingSideCastlePaths} from "./kingSideCastlePaths";


export function getKingSideCastlePaths(color) {
    /*use the target square of the castle move to get the squares on castle path**/
    return kingSideCastlePaths[color]
}

// module.exports = getKingSideCastlePaths;

/** for node.js
if (require.main === module) {
    console.log('W')
    console.log(getKingSideCastlePaths('W'))
    console.log('B')
    console.log(getKingSideCastlePaths('B'))

}
*/

