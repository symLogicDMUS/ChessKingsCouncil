var  rookLocations  = require("./rookLocations");


function getRookLocations(kingLoc) {
    /*using kingLoc to get starting rook locations**/
    return rookLocations[kingLoc]
}

module.exports = getRookLocations;

if (require.main === module) {
    console.log("[5, 1]")
    console.log(getRookLocations([5, 1]))
    console.log("[5, 8]")
    console.log(getRookLocations([5, 8]))
}

