import {getRfFromId} from "./getRfFromId";


export function getRfsFromIds(board, ids) {
    let rfs = []
    for (var id of ids) {
        rfs.push(getRfFromId(board, id))
    }
    return rfs;
}

// module.exports = getRfsFromIds;