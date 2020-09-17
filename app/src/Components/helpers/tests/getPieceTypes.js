
var getPieceType =  require("./getPieceType");

function getPieceTypes(board) {
    //filter out empty squares
    let piece_ids = Object.values(board).filter(sqr => {return sqr !== '#'} )
    let piece_types = piece_ids.map( id_ => getPieceType(id_))
    return piece_types
}

module.exports = getPieceTypes;

if (require.main === module) {
    const board = {
        'a1': 'WR1', 'a2': 'WP1', 'a3': '#', 'a4': '#', 'a5': '#', 'a6': '#', 'a7': 'BP1', 'a8': 'BR1', 
        'b1': 'WN1', 'b2': 'WP2', 'b3': '#', 'b4': '#', 'b5': '#', 'b6': '#', 'b7': 'BP2', 'b8': 'BN1', 
        'c1': 'WB1', 'c2': 'WP3', 'c3': '#', 'c4': '#', 'c5': '#', 'c6': '#', 'c7': 'BP3', 'c8': 'BB1', 
        'd1': 'WQ1', 'd2': 'WP4', 'd3': '#', 'd4': '#', 'd5': '#', 'd6': '#', 'd7': 'BP4', 'd8': 'BQ1', 
        'e1': 'WK1', 'e2': 'WP5', 'e3': '#', 'e4': '#', 'e5': '#', 'e6': '#', 'e7': 'BP5', 'e8': 'BK1', 
        'f1': 'WB2', 'f2': 'WP6', 'f3': '#', 'f4': '#', 'f5': '#', 'f6': '#', 'f7': 'BP6', 'f8': 'BB2', 
        'g1': 'WN2', 'g2': 'WP7', 'g3': '#', 'g4': '#', 'g5': '#', 'g6': '#', 'g7': 'BP7', 'g8': 'BN2', 
        'h1': 'WR2', 'h2': 'WP8', 'h3': '#', 'h4': '#', 'h5': '#', 'h6': '#', 'h7': 'BP8', 'h8': 'BR2'};
    console.log(getPieceTypes(board))
}