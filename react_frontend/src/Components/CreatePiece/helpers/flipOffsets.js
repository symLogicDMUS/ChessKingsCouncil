
export function flipOffsets(offsets) {
    offsets = offsets.map(offset =>  [offset[0] * -1, offset[1] * -1])
    return offsets
}
