import { isPromoRows } from "./isPromoRows";
import { rfToXy } from "../../../coordType/crdCnvrt";

export function filterNonMatchingRows(board, pawnRangesRfKey) {
    const promosDict = {};

    for (let rf of Object.keys(pawnRangesRfKey)) {
        promosDict[rf] = [];
        for (const dest of pawnRangesRfKey[rf]) {
            if (isPromoRows(rfToXy(rf), rfToXy(dest), board[rf])) {
                promosDict[rf].push(dest);
            }
        }

        for (rf of Object.keys(promosDict)) {
            if (promosDict[rf].length === 0) delete promosDict[rf];
        }
    }

    return promosDict;
}

// module.exports = filterNonMatchingRows;
