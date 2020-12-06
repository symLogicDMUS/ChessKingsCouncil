

export function isEmptyRanges(ranges) {
    for (const id of Object.keys(ranges)) {
        if (ranges[id].toString() !== [].toString()) {
            return false
        }
    }
    return true;
}