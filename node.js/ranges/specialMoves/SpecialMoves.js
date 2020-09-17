const getColor = require("../../color/getColor");
const replacePawnIdWithRankfile = require("../../JsonRecords/replacePawnIdWithRankfile");
const filterNonMatchingRows = require("./pawnPromotion/filterNonMatchingRows");
const getPawnIds = require("./pawnPromotion/getPawnIds");
const getPawnRanges = require("./pawnPromotion/getPawnRanges");
const getPromos = require("./pawnPromotion/getPromos")


class SpecialMoves {
    /*records the moves of current turn that are en-passant, castle, || pawn promotion**/

    constructor() {
        /*list form.includes(elements) of (start, dest) where start &&  dest are (x, y)**/
        this.enPassant = []
        this.castles = []
        this.promos = []
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
        return {'castles': this.castles, 'enPassant': this.enPassant, 'promos': this.promos}
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

    setPromos(board, ranges, color) {
        /*use the ranges &&  board to determine potential pawn promotions**/

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
}

module.exports = SpecialMoves;

if (require.main === module) {
    
    const sampleBoardDicts = require("../../testObjects/sampleBoardDicts");
    const mapListListXyToRf = require("../../coordType/mapListListXyToRf");
    const getPromoStartAndDest = require("./pawnPromotion/getPromoStartAndDest")
    const printBoard = require("../../printers/printBoard");

    var specialMoves;
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
    var board = sampleBoardDicts["pawn_promo"];

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