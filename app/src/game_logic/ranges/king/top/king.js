import {canKingSideCastle} from "../../specialMoves/castle/canKingSideCastle";
import {canQueenSideCastle} from "../../specialMoves/castle/canQueenSideCastle";
import {getCastleTargetSquare} from "../../specialMoves/castle/getCastleTargetSquare";
import {getKingInitialMoves} from "../getKingInitialMoves";
import {getKingActualMoves} from "../getKingActualMoves";


export function king(board, sqr, color, jsonRecords, specialMoves, pieceDefs, idDict) {
    /**get the range of king at location sqr on board of given color
     pseudocode
     ---------
     get initial moves
     filter initial moves to get actual moves
     if canKingSideCastle...
     ..getKingSideCastle
     if canQueenSideCastle...
     ..getQueenSideCastle
     */
    let kRange, tSqr;
    kRange = getKingInitialMoves(board, sqr, color)
    if (canKingSideCastle(board, color, jsonRecords, pieceDefs, idDict)) {
        tSqr = getCastleTargetSquare(color, 'K')
        kRange.push(tSqr)
        specialMoves.addCastle([sqr, tSqr])
    }
    if (canQueenSideCastle(board, color, jsonRecords, pieceDefs, idDict)) {
        tSqr = getCastleTargetSquare(color, 'Q')
        kRange.push(tSqr)
        specialMoves.addCastle([sqr, tSqr])
    }
    kRange = getKingActualMoves(board, sqr, kRange, color, pieceDefs, idDict)

    return [kRange, specialMoves]
}

// module.exports = king;
