import { xyToRf } from "../Components/helpers/crdCnvrt";


export function getAiSqr(sqr) {
    /**if sqr is not null than it is [x, y] so convert it to rankfile, otherwise return it */

    if (sqr) {
        return xyToRf(...sqr)
    }

    return sqr
}