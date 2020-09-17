

export function getPieceType(id) {
    /*return letter of the piece to indicate id **/
    if (id === '#') {
        return "Empty"
    }
    return id[1]
}

// module.exports = getPieceType;

/** for node.js
if (require.main === module) {
    for (var id of ['WP1', 'BB2', 'WQ3', 'WK1', 'BK1', 'WR2', 'WN1']) {
        let type_ = getPieceType(id)
    }
    console.log(`id:${id}, type:${type_}\n`)

}
*/