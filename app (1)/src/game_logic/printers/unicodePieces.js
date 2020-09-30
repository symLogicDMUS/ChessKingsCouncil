export var unicodePieces = {'W': {'R': '♜', 'Q': '♛', 'K': '♚', 'B': '♝', 'N': '♞', 'P': '♟'},
                  'B': {'R': '♖', 'Q': '♕', 'K': '♔', 'B': '♗', 'N': '♘', 'P': '♙'}}

// module.exports = unicodePieces;

// reverse key of above 'W' &&  'B' dicts
export var unicodePiecesRk = {
    '\u265c': "Rook",
    '\u265b': "Queen",
    '\u265a': "King",
    '\u265d': "Bishop",
    '\u265e': "Knight",
    '\u265f': "Pawn",
    '\u2656': "Rook",
    '\u2655': "Queen",
    '\u2654': "King",
    '\u2657': "Bishop",
    '\u2658': "Knight",
    '\u2659': "Pawn"
}

/** for node.js
if (require.main === module) {
    for (var color of Object.keys(unicodePieces)) {
        for (var pieceType of unicodePieces[color].keys()) {
            console.log(unicodePieces[color][pieceType], ascii(unicodePieces[color][pieceType]))
        }
    }
    for (var uniP of Object.keys(unicodePiecesRk)) {
    }
    
    console.log(unicodePiecesRk[uniP])
}
*/
