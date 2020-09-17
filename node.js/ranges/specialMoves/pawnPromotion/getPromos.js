const { rfToXy } = require("../../../coordType/crdCnvrt");


function getPromos(promosDict) {
    var promos = []
    for (var rf of Object.keys(promosDict)) {
        for (dest of promosDict[rf]) {
            promos.push([rfToXy(rf), dest])
        }
    }
    return promos;
}

module.exports = getPromos;