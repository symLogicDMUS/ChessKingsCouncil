

export function isEmptyRanges(ranges) {

    for (var id of Object.keys(ranges)) {
        if (ranges[id].toString() !== [].toString()) {
            return false
        }
    }

    return true;

}