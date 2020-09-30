import {rookLocations} from "./rookLocations";


export function getRookLocations(kingLoc) {
    /*using kingLoc to get starting rook locations**/
    return rookLocations[kingLoc]
}

// module.exports = getRookLocations;

/** for node.js
if (require.main === module) {
    console.log("[5, 1]")
    console.log(getRookLocations([5, 1]))
    console.log("[5, 8]")
    console.log(getRookLocations([5, 8]))

}
*/

