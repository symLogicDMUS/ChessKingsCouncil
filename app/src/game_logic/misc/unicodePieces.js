export const unicodePieces = {'W': {'Rook': '♜', 'Queen': '♛', 'King': '♚', 'Bishop': '♝', 'Knight': '♞', 'Pawn': '♟'},
                  'B': {'Rook': '♖', 'Queen': '♕', 'King': '♔', 'Bishop': '♗', 'Knight': '♘', 'Pawn': '♙'}}

// reverse key of above 'W' &&  'B' dicts
export let unicodePiecesRk =
    {
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


// module.exports = unicodePieces;


/** for node.js
if (require.main === module) {
    //TODO: implement test

}
*/