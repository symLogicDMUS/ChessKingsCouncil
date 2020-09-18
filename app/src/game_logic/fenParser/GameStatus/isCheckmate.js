import {filterEmptyRanges} from "../../../apiHelpers/filterEmpyRanges";
import {isEmptyObject} from "../../helpers/isEmptyObject";


export function isCheckmate(ranges) {
    if (isEmptyObject(filterEmptyRanges(ranges))) {
        return true
    }
    else {
        return false
    }
}

// module.exports = isCheckmate;