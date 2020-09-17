export function getPieceColors(pieceList) {
    /**
    takes a list of piece assignIds, &&  returns a list of the color of each piece
    */
    var colors = []
    for (var piece of pieceList) {
        if (piece[0] === 'W') {
            colors.push('W')
        }
        else if (piece[0] === 'B') {
            colors.push('B')
        }
        else {
            console.log('error: ! a piece id')
        }
    }
    return colors
}

// module.exports = getPieceColors;

/** for node.js
if (require.main === module) {
    let pieceColors = getPieceColors(['WP4', 'WR1', 'BQ3'])
    console.log(pieceColors === ['W', 'W', 'B'])

}
*/