import {rfToXy} from "../coordType/crdCnvrt";
import {mapDictListRfToXy} from "../coordType/mapDictListRfToXy";
import {initPawnIds} from "./initPawnIds";
import {getPieceType} from "../pieceType/getPieceType";


export class JsonRecords {
    /*contains the necessary info to determine when castles and en-passants can be performed**/

    constructor(records) {
        /*new instance of object created for every update to piece finalRanges i.e. @app.update()**/
        this.rooksMoved = records['rooks_moved']
        this.kingsMoved = records['kings_moved']
        this.pawnHistories = records['pawn_histories']
        this.lastPawnMove = records['last_pawn_move']
        this.numConsecutiveNonPawnMoves = records['num_consecutive_non_pawn_moves']

        this.pawnHistories = mapDictListRfToXy(this.pawnHistories)

        if (this.lastPawnMove !== "None") {
            this.lastPawnMove = rfToXy(this.lastPawnMove)
        }
    }

    pawnKeysToCurrentRf() {
        /*swap the key of each pawnHistory entry with the coordinate of its current location**/
        pawnHistories = {}
        for (var hist of Object.values(this.pawnHistories)) {
            let sqr = hist[hist.length - 1]
            pawnHistories[sqr] = hist
        }
        this.pawnHistories = pawnHistories
    }

    update(id, start, dest, promoFlag) {
        /*update json records depending on the piece type of id_ at location start**/
        var pType = getPieceType(id);
        if (pType != "P") {
            this.numConsecutiveNonPawnMoves += 1
            if (pType === 'R' &&  Object.keys(this.rooksMoved).includes(start)) {
                this.updateRooksMoved(start)
            }
            else if (pType === 'K' &&  Object.keys(this.kingsMoved).includes(start)) {
                this.updateKingsMoved(start)
            }
        }
        else {
            this.resetNonPawnMoves()
            this.lastPawnMove = dest
            this.updatePawnHistory(id, dest, promoFlag)
        }
        return
    }

    updateRooksMoved(sqr) {
        /*update rooksMoved because rook that start game at sqr has moved**/
        this.rooksMoved[sqr] = true
    }

    updateKingsMoved(sqr) {
        /*update kingsMoved because king that started game at sqr has moved**/
        this.kingsMoved[sqr] = true
    }

    updatePawnHistory(id_, newLoc, promo) {
        /*update location of pawn by appending its new location to its history**/
        console.log("id", id_)
        console.log("newLoc", newLoc)
        console.log("promo", promo)
        if (promo) {
            delete this.pawnHistories[id_]
        }
        else {
            this.pawnHistories[id_].push(newLoc)
        }
    }

    getRecords() {
        /*return the json records as one python dict**/
        return {'rooksMoved': this.rooksMoved, 'kingsMoved': this.kingsMoved,
                'pawnHistories': this.pawnHistories, 'lastPawnMove': this.lastPawnMove,
                'numConsecutiveNonPawnMoves': this.numConsecutiveNonPawnMoves}
    }

    resetNonPawnMoves() {
        /* a pawn has just moved, so reset number of consecutive non pawn moves to 0**/
        this.numConsecutiveNonPawnMoves = 0
    }

    deletePawn(id_) {
        /*delete pawn with id from pawn histories**/
        delete this.pawnHistories[id_]
    }

    hasKingMoved(color) {
        /*return true/false of if the King of color has moved from its starting position**/
        if (color === 'W') {
            return this.kingsMoved["e1"]
        }
        else if (color === 'B') {
            return this.kingsMoved["e8"]
        }
        else {
            console.log('error: ! a valid color\n')
            return -1
        }
    }

    getStartKing(color) {
        /*get starting position of king based off of color**/
        if (color === 'W') {
            return "e1"
        }
        else if (color === 'B') {
            return "e8"
        }
        else {
            console.log('error:invalid color')
            return -1
        }
    }

    updateRookDict(rooksMoved) {
        /*update rooksMoved dict to a new one**/
        this.rooksMoved = rooksMoved
    }

    queenSideRookMoved(color) {
        /*return true if the queen side rook of the given color has moved, otherwise false**/
        if (color === 'W') {
            return this.rooksMoved["a1"]
        }
        else if (color === 'B') {
            return this.rooksMoved["a8"]
        }
    }

    kingSideRookMoved(color) {
        /*return true if the king side rook of the given color has moved, otherwise false**/
        if (color === 'W') {
            return this.rooksMoved["h1"]
        }
        else if (color === 'B') {
            return this.rooksMoved["h8"]
        }
    }
}

// module.exports = JsonRecords;

/** for node.js
if (require.main === module) {

    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {dataDict} from "../testObjects/dataDicts/dd1";

    var records = dataDict["pawn_range"]["json"]
    var board = sampleBoardDicts["pawn_range"];

}
*/