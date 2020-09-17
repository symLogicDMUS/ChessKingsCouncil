import {isPromoRows} from "./isPromoRows";
import {rfToXy} from "../../../coordType/crdCnvrt";


export function filterNonMatchingRows(board, pawnRangesRfKey) {
    var promosDict = {}
    for (var rf of Object.keys(pawnRangesRfKey)) {
        promosDict[rf] = pawnRangesRfKey[rf].filter(dest => isPromoRows(rfToXy(rf), dest, board[rf]))
    }
    return promosDict;
}

// module.exports = filterNonMatchingRows;