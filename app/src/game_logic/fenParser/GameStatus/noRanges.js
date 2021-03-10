import {isEmptyObject} from "../../helpers/isEmptyObject";
import {filterEmptyRanges} from "../../../API/apiHelpers/filterEmpyRanges";


export function noRanges(ranges) {
    if (isEmptyObject(filterEmptyRanges(ranges))) {
        return true
    }
    else {
        return false
    }
}

// module.exports = isCheckmate;