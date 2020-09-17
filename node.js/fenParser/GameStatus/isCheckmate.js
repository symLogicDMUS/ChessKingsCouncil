import {filterEmptyRanges} from "../../apiHelpers/filterEmpyRanges";


export function isCheckmate(ranges) {
    if (isEmptyObject(filterEmptyRanges(ranges))) {
        return true
    }
    else {
        return false
    }
}

// module.exports = isCheckmate;