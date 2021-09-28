import { rfToXy, xyToRf } from "../coordType/crdCnvrt";
import { mapDictListRfToXy } from "../coordType/mapDictListRfToXy";
import { mapDictListXyToRf } from "../coordType/mapDictListXyToRf";
import { getPieceType } from "../pieceType/getPieceType";

/**
 * Data that need to keep for Castling, En passants, and Pawn promotions.
 *
 * NOTE: game-reducers and component rendering have separate instances of this class use them differently. game-reducers makes
 *       new instance each turn and component side updates its instance. Most of its methods are used by game-reducers side.
 */
export class JsonRecords {
    constructor(records) {
        this.rooksMoved = records["rooks_moved"];
        this.kingsMoved = records["kings_moved"];
        this.pawnHistories = records["pawn_histories"];
        this.lastPawnMove = records["last_pawn_move"];
        this.numConsecutiveNonPawnMoves =
            records["num_consecutive_non_pawn_moves"];
    }

    /**
     * swap the key of each pawnHistory entry with the coordinate of its current location (last list item).
     **/
    pawnKeysToCurrentRf() {
        const pawnHistories = {};
        for (const hist of Object.values(this.pawnHistories)) {
            let sqr = hist[hist.length - 1];
            pawnHistories[sqr] = hist;
        }
        this.pawnHistories = pawnHistories;
    }

    update(id, start, dest, promoFlag) {
        const pType = getPieceType(id);
        if (pType !== "P") {
            this.numConsecutiveNonPawnMoves += 1;
            if (pType === "R" && Object.keys(this.rooksMoved).includes(start)) {
                this.updateRooksMoved(start);
            } else if (
                pType === "K" &&
                Object.keys(this.kingsMoved).includes(start)
            ) {
                this.updateKingsMoved(start);
            }
        } else {
            this.resetNonPawnMoves();
            this.lastPawnMove = dest;
            this.updatePawnHistory(id, dest, promoFlag);
        }
    }

    updateRooksMoved(sqr) {
        /*update rooksMoved because rook that start game at sqr has moved**/
        this.rooksMoved[sqr] = true;
    }

    updateKingsMoved(sqr) {
        /*update kingsMoved because king that started game at sqr has moved**/
        this.kingsMoved[sqr] = true;
    }

    updatePawnHistory(id, newLoc, promo) {
        /*update location of pawn by appending its new location to its history**/
        if (promo) {
            delete this.pawnHistories[id];
        } else {
            this.pawnHistories[id].push(newLoc);
        }
    }

    getMapRecords() {
        /**convert pawnHistories and last_pawn_move to rankfile format, than return all records */
        this.pawnHistories = mapDictListXyToRf(this.pawnHistories);
        this.lastPawnMove = xyToRf(...this.lastPawnMove);
        return this.getRecords();
    }

    getRecords() {
        /*return the json records as one python dict**/
        return {
            rooks_moved: this.rooksMoved,
            kings_moved: this.kingsMoved,
            pawn_histories: this.pawnHistories,
            last_pawn_move: this.lastPawnMove,
            num_consecutive_non_pawn_moves: this.numConsecutiveNonPawnMoves,
        };
    }

    resetNonPawnMoves() {
        /* a pawn has just moved, so reset number of consecutive non pawn moves to 0**/
        this.numConsecutiveNonPawnMoves = 0;
    }

    deletePawn(id) {
        /*delete pawn with id from pawn histories**/
        delete this.pawnHistories[id];
    }

    hasKingMoved(color) {
        /*return true/false of if the King of color has moved from its starting position**/
        if (color === "W") {
            return this.kingsMoved["e1"];
        } else if (color === "B") {
            return this.kingsMoved["e8"];
        } else {
            console.log("error: ! a valid color\n");
            return -1;
        }
    }

    getStartKing(color) {
        /*get starting position of king based off of color**/
        if (color === "W") {
            return "e1";
        } else if (color === "B") {
            return "e8";
        } else {
            console.log("error:invalid color");
            return -1;
        }
    }

    updateRookDict(rooksMoved) {
        /*update rooksMoved dict to a new one**/
        this.rooksMoved = rooksMoved;
    }

    queenSideRookMoved(color) {
        /*return true if the queen side rook of the given color has moved, otherwise false**/
        if (color === "W") {
            return this.rooksMoved["a1"];
        } else if (color === "B") {
            return this.rooksMoved["a8"];
        }
    }

    kingSideRookMoved(color) {
        /*return true if the king side rook of the given color has moved, otherwise false**/
        if (color === "W") {
            return this.rooksMoved["h1"];
        } else if (color === "B") {
            return this.rooksMoved["h8"];
        }
    }

    isLastPawnMove(rf) {
        return rf === this.lastPawnMove;
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
