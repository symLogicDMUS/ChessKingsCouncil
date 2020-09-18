import {isPromoRows} from "./isPromoRows";
import {rfToXy} from "../../../coordType/crdCnvrt";


export function filterNonMatchingRows(board, pawnRangesRfKey) {
    
    var promosDict = {}
    
    for (var rf of Object.keys(pawnRangesRfKey)) {
        promosDict[rf] = []
        for (var dest of pawnRangesRfKey[rf]) {
            if (isPromoRows(rfToXy(rf), rfToXy(dest), board[rf])) {
                promosDict[rf].push(dest)
            }
        }

        for (var rf of Object.keys(promosDict)) {
            if (promosDict[rf].length === 0)
                delete promosDict[rf]
        }
    }

    return promosDict;
}

// module.exports = filterNonMatchingRows;