import {rookStartAndDest} from "./rookStartAndDest";
import {getRookLocations} from "./getRookLocations";


export function getRookStartAndDest(kingPos) {
    /*get the start &&  dest of a particular rook during a castle**/
    var [rStart, rDest] = rookStartAndDest[kingPos]
    return rStart, rDest 
}

// module.exports = getRookStartAndDest;

/** for node.js
if (require.main === module) {
    console.log(getRookStartAndDest([3, 1]))
    console.log(getRookStartAndDest([7, 1]))
    console.log(getRookStartAndDest([3, 8]))
    console.log(getRookStartAndDest([7, 8]))

}
*/