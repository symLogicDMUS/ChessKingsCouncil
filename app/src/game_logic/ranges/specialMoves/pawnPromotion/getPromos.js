import { rfToXy } from "../../../coordType/crdCnvrt";

export function getPromos(promosDict) {
    const promos = [];
    for (const rf of Object.keys(promosDict)) {
        for (const dest of promosDict[rf]) {
            promos.push([rf, dest]);
        }
    }
    return promos;
}

// module.exports = getPromos;
