var  filterEmptyRanges  = require("apiHelpers/filterEmptyRanges");


function isCheckmate(ranges) {
    if (isEmptyObject(filterEmptyRanges(ranges))) {
        return true
    }
    else {
        return false
    }
}

module.exports = isCheckmate;