import { mapListXyToRf } from "../../coordType/mapListXyToRf";
import { mapListListXyToRf } from "../../coordType/mapListListXyToRf";
import {strfind} from "../../helpers/strfind";
import {replacePawnIdWithRankfile} from "../../JsonRecords/replacePawnIdWithRankfile";
import {filterNonMatchingRows} from "./pawnPromotion/filterNonMatchingRows";
import {getPawnIds} from "./pawnPromotion/getPawnIds";
import {getPawnRanges} from "./pawnPromotion/getPawnRanges";
import {getPromos} from "./pawnPromotion/getPromos"
import { isPromoRows } from "./pawnPromotion/isPromoRows";
import { xyToRf } from "../../coordType/crdCnvrt";


export class SpecialMoves {
    /*records the moves of current turn that are en-passant, castle, || pawn promotion**/

    constructor(moves) {
        /* **/
        if (moves) {
            this.enPassant = moves['en_passant']
            this.castles = moves['castles']
            this.promos = moves['promos']
        }
        else {
            this.enPassant = []
            this.castles = []
            this.promos = []
        }

        //will be the location of a pawn that reached the back row and is about to be poromoted
        this.pendingPromo = null;

    }

    update(moves) {
        this.enPassant = moves['en_passant']
        this.castles = moves['castles']
        this.promos = moves['promos']
    }

    convertToRf() {
        this.enPassant = mapListListXyToRf(this.enPassant)
        this.castles = mapListListXyToRf(this.castles)
        this.promos = mapListListXyToRf(this.promos)
        return
    }

    isCastle(move) {
        /*returns true if move is a currently available castle, otherwise false**/
        if (strfind(this.castles, move)) {
            return true
        }
        else {
            return false
        }
    }

    isPromo(move) {
        /*returns true if move is a currently available pawn promotion, otherwise false**/
        if (strfind(this.promos, move)) {
            return true
        }
        else {
            return false
        }
    }

    isEnPassant(move) {
        /*returns true if move is a currently available en-passant capture, otherwise false**/
        if (strfind(this.enPassant, move)) {
            return true
        }
        else {
            return false
        }
    }

    addCastle(move) {
        /*add move to currently available castles**/
        this.castles.push(move)
    }
    
    addPromo(move) {
        /*add move to list of currently avaliable pawn promotions**/
        this.promos.push(move)
    }

    addEnPassant(move) {
        /*add move to list of currently avaliable en-passants**/
        this.enPassant.push(move)
    }

    getMoves() {
        /*return castle, enPassant, &&  pawn promotion lists, as a dict**/
        return {'castles': this.castles, 'en_passant': this.enPassant, 'promos': this.promos}
    }

    getCastles() {
        /*return the list of castle moves**/
        return this.castles
    }

    getEnPassant() {
        /*return the en-passant moves**/
        return this.enPassant
    }

    getPromos() {
        /*return the pawn promotions**/
        return this.promos
    }

    setPromos(board, pawnLoc, pawnRange) {
        for (var dest of pawnRange) {
            if ( isPromoRows(pawnLoc, dest, board[xyToRf(...pawnLoc)]) ) {
                this.promos.push([pawnLoc, dest])
            }
        }
    }

    /*
    setPromos(board, ranges, color) {
        // use the ranges &&  board to determine potential pawn promotions

        ///getPawnIds
        var pawnIds = getPawnIds(ranges, color)
        
        //getPawnRanges
        var pawnRanges = getPawnRanges(pawnIds, ranges)

        //setPawnRangeKeysToRf
        var pawnRangesRfKey = replacePawnIdWithRankfile(board, pawnRanges)
        
        //filterNonMatchingRows
        var promosDict = filterNonMatchingRows(board, pawnRangesRfKey)

        //getPromos
        this.promos = getPromos(promosDict);

        return
    }
    */
   
    removeCastle(move) {
        let index = -1;
        for (let i = 0; i < this.castles.length; i++) {
            if (this.castles[i][0] === move[0] && this.castles[i][1] === move[1]) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            this.castles.splice(index, 1)
        }
        return
    }

    removePromo(move) {
        let index = -1;
        for (let i = 0; i < this.promos.length; i++) {
            if (this.promos[i][0] === move[0] && this.promos[i][1] == move[1]) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            this.promos.splice(index, 1)
        }
        return
    }

    removeEnpassant(move) {
        let index = -1;
        for (let i = 0; i < this.enPassant.length; i++) {
            if (this.enPassant[i][0] === move[0] && this.enPassant[i][1] === move[1]) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            this.enPassant.splice(index, 1)
        }
    }
    
}

// module.exports = SpecialMoves;

/** for node.js
if (require.main === module) {
    
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {mapListListXyToRf} from "../../coordType/mapListListXyToRf";
    import {getPromoStartAndDest} from "./pawnPromotion/getPromoStartAndDest"
    import {printBoard} from "../../printers/printBoard";

    var specialMoves;

    //THIS NEED TO BE CHANGED TO RANKFILE FORMAT RANGES AS specialMoves.setPromos() is called after getFinal Ranges!
    var ranges =
        {'WB1': [[7, 2], [8, 3], [5, 2], [4, 3], [3, 4], [2, 5], [1, 6]],
         'WB2': [[6, 4], [7, 5], [8, 6], [4, 4], [3, 5], [2, 6], [1, 7], [4, 2], [3, 1]],
         'WK1': [[4, 2], [5, 2]],
         'WN1': [[5, 2], [6, 3], [8, 3]],
         'WN2': [[2, 1], [3, 2], [3, 4], [2, 5]],
         'WP1': [[6, 3], [6, 4]],
         'WP2': [[8, 3], [8, 4]],
         'WP3': [[1, 5]],
         'WP4': [[6, 5]],
         'WP5': [[7, 5], [8, 5], [6, 5]],
         'WP6': [[2, 8], [3, 8], [1, 8]],
         'WQ1': [[5, 2], [6, 3], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [3, 2], [3, 1], [2, 1]],
         'WR1': [[1, 2], [2, 1], [3, 1]],
         'WR2': [],
         'BB1': [[2, 7]],
         'BB2': [[5, 7], [4, 6], [3, 5], [2, 4], [1, 3]],
         'BK1': [[5, 7], [6, 7]],
         'BN1': [[2, 4], [4, 4], [1, 5], [1, 7], [5, 7], [2, 8]],
         'BN2': [[6, 6], [8, 6], [5, 7]],
         'BP1': [[3, 1], [4, 1]],
         'BP2': [],
         'BP3': [[6, 4], [5, 4], [7, 4]],
         'BP4': [[8, 4], [7, 4]],
         'BP5': [[4, 6], [4, 5]],
         'BP6': [[7, 6], [7, 5]],
         'BQ1': [[3, 7], [2, 6], [1, 5], [5, 7], [6, 6], [7, 5], [8, 4]],
         'BR1': [[1, 7], [1, 6], [1, 5], [1, 4], [2, 8]],
         'BR2': [[8, 7], [8, 6]]}
    var board = sampleBoardDicts["pawnPromo"];

    specialMoves = new SpecialMoves()
    specialMoves.setPromos(board, ranges, 'W')
    var promos = mapListListXyToRf(specialMoves.promos)
    var [promoStarts, promoDests] = getPromoStartAndDest(promos);
    printBoard(board, "white", promoDests, null, promoStarts)

    specialMoves = new SpecialMoves()
    specialMoves.setPromos(board, ranges, 'B')
    var promos = mapListListXyToRf(specialMoves.promos)
    var [promoStarts, promoDests] = getPromoStartAndDest(promos);
    printBoard(board, "black", promoDests, null, promoStarts)
    

}
*/