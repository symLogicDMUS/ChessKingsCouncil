import {filterEmptyRanges} from "apiHelpers/filterEmptyRanges";


export function isCheckmate(ranges) {
    if (isEmptyObject(filterEmptyRanges(ranges))) {
        return true
    }
    else {
        return false
    }
}

// module.exports = isCheckmate;