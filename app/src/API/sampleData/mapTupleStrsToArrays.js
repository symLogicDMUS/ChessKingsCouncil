export function mapTupleStrsToArrays(tupleStrs) {
    return tupleStrs.map(tupleStr => tupleStr.split(',').map(n => Number(n)))
}