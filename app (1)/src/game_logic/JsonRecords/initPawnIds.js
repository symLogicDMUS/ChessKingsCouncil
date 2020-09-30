import {getPieceType} from "../pieceType/getPieceType";


export function initPawnIds(records, board) {
    /*exchange the tf that pawn started the game with, with the id for that pawn**/
    var pawnHistories = {};
    var rf, id;
    
    if (! Object.keys(records).includes('pawn_histories')) {
        records['pawn_histories'] = {}
    }
    
    for (var hist of Object.values(records['pawn_histories'])) {
        rf = hist[hist.length - 1]
        id = board[rf]
        pawnHistories[id] = hist
        if (getPieceType(id) != 'P') {
            console.log(`ERROR: there is no pawn at {sqr}`)
            throw Error;
        }
    }
    records['pawn_histories'] = pawnHistories
    return records
}

// module.exports = initPawnIds;

/** for node.js
if (require.main === module) {
    let records = {
        "rooks_moved": {
            "a1": false,
            "h1": false,
            "a8": false,
            "h8": false
        },
        "kings_moved": {
            "e1": false,
            "e8": false
        },
        "pawn_histories": {
            "a4": ["a2", "a4"],
            "b4": ["b2", "b4"],
            "c4": ["c2", "c4"],
            "d4": ["d2", "d4"],
            "e4": ["e2", "e4"],
            "f4": ["f2", "f4"],
            "g4": ["g2", "g4"],
            "h4": ["h2", "h4"],
            "a5": ["a7", "a5"],
            "b5": ["b7", "b5"],
            "c5": ["c7", "c5"],
            "d5": ["d7", "d5"],
            "e5": ["e7", "e5"],
            "f5": ["f7", "f5"],
            "g5": ["g7", "g5"],
            "f5": ["f7", "f5"]
        },
        "last_pawn_move": "None",
        "num_consecutive_non_pawn_moves": 0
    }
    let board =
        {"a1": 'WR1', "b1": 'WN1', "c1": 'WB1', "d1": 'WQ1', "e1": 'WK1', "f1": 'WB2', "g1": 'WN2',
         "h1": 'WR2', "a2": '#', "b2": '#', "c2": '#', "d2": '#', "e2": '#', "f2": '#', "g2": '#',
         "h2": '#', "a3": '#', "b3": '#', "c3": '#', "d3": '#', "e3": '#', "f3": '#', "g3": '#',
         "h3": '#', "a4": 'WP1', "b4": 'WP2', "c4": 'WP3', "d4": 'WP4', "e4": 'WP5', "f4": 'WP6',
         "g4": 'WP7', "h4": 'WP8', "a5": 'BP1', "b5": 'BP2', "c5": 'BP3', "d5": 'BP4', "e5": 'BP5',
         "f5": 'BP6', "g5": 'BP7', "h5": 'BP8', "a6": '#', "b6": '#', "c6": '#', "d6": '#', "e6": '#',
         "f6": '#', "g6": '#', "h6": '#', "a7": '#', "b7": '#', "c7": '#', "d7": '#', "e7": '#',
         "f7": '#', "g7": '#', "h7": '#', "a8": 'BR1', "b8": 'BN1', "c8": 'BB1', "d8": 'BQ1',
         "e8": 'BK1', "f8": 'BB2', "g8": 'BN2', "h8": 'BR2'}
    console.log(initPawnIds(records, board))

}
*/
    

