var  rookStartAndDest  = require("./rookStartAndDest");
const getRookLocations = require("./getRookLocations");


function getRookStartAndDest(kingPos) {
    /*get the start &&  dest of a particular rook during a castle**/
    let [rStart, rDest] = rookStartAndDest[kingPos]
    return rStart, rDest 
}

module.exports = getRookStartAndDest;

if (require.main === module) {
    console.log(getRookStartAndDest([3, 1]))
    console.log(getRookStartAndDest([7, 1]))
    console.log(getRookStartAndDest([3, 8]))
    console.log(getRookStartAndDest([7, 8]))
}