import { rfToXy } from "../../../coordType/crdCnvrt";


export function getPromos(promosDict) {
    var promos = []
    for (var rf of Object.keys(promosDict)) {
        for (var dest of promosDict[rf]) {
            promos.push([rf, dest])
        }
    }
    return promos;
}

// module.exports = getPromos;