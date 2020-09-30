import {getPieceType} from "../../pieceType/getPieceType";
import {pawn} from "../../ranges/pawn/top/pawn";
import {king} from "../../ranges/king/top/king";
import {getRange} from "../../ranges/getRange";
import {getColor} from "../../color/getColor";
import {getPieceLoc} from "../../helpers/getPieceLoc";
import {mapListXyToRf} from "../../coordType/mapListXyToRf";
import {rfToXy} from "../../coordType/crdCnvrt"
import {SpecialMoves} from "../../ranges/specialMoves/SpecialMoves";


export function getRanges(board, color, ranges, jsonRecords, pieceDefs, idDict) {
    /**get the range of every piece on board of specific color, including special moves
    these ranges are initial ranges. They don't take into consideration if the move endangers the king || not. This is
    resolved the.includes(later) program &&  the initial ranges are then filtered
    the ranges of special pieces Rook &&  Pawn (who's ranges cannot be fully defined by the defs format)
    are resolved first, then for the Knight, Queen, Bishop, Rook, &&  any assignIds defined pieces.
    defs[idDict] dict is a dict withs keys the non-special assigned ids, &&  values the names they're representing
    defs_[pieceDefs] is a subset of defs.json
    */

    var pieceType, pieceRange;
    var specialMoves = new SpecialMoves(null);

    for (var [rf, id] of Object.entries(board)) {

        if (id === '#') {
            continue
        }

        if (getColor(id) !== color) {
            continue
        }

        pieceType = getPieceType(id)

        if (pieceType === 'P') {
            [pieceRange, specialMoves] = pawn(board, rfToXy(rf), color, jsonRecords, specialMoves)
            ranges[id].push(...pieceRange)
        }

        else if (pieceType === 'K') {
            [pieceRange, specialMoves] = king(board, rfToXy(rf), color, jsonRecords, specialMoves, pieceDefs, idDict)
            ranges[id].push(...pieceRange)
        }

        else {
            pieceRange = getRange(board, rfToXy(rf), color, pieceDefs, idDict)
            ranges[id].push(...pieceRange)
        }
    }

    return [ranges, specialMoves]
}

// module.exports = getRanges;

/** for node.js
if (require.main === module) {
    
    import {JsonRecords} from "../../JsonRecords/JsonRecords";
    import {initPawnIds} from "../../JsonRecords/initPawnIds"
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {getResetPieceDicts} from "../../getters/getResetPieceDicts";
    import {getStandardPieceDefs} from "../../testObjects/getStandardPieceDefs";
    import {getStandardIdDict} from "../../testObjects/getStandardIdDict";
    import {initEmptyRanges} from "../../apiHelpers/initEmptyRanges";
    import {initDDEmptyLists} from "../../apiHelpers/initDDEmptyLists"
    import {dataDict} from "../../testObjects/dataDicts/dd1";
    import {printBoard} from "../../printers/printBoard";

    var board, jsonRecords, initRanges;
    var idDict = getStandardIdDict()
    var pieceDefs = initEmptyRanges(getStandardPieceDefs());
    dataDict = initDDEmptyLists(dataDict);
    
    var game_names = [
        'castle_test2',
        'enpassant_test1',
        'fundemental_defense',
        'king_range_test',
        'pawn_promo',
        'ranges_test',
        'stalemate_exp1',
        'super_checkmate_impossible_example']

    for (var game_name of game_names) {

        board = sampleBoardDicts[game_name]
        records = dataDict[game_name]["json"]
        jsonRecords = new JsonRecords(initPawnIds(records, board))

        var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, 'W')
        var [initRanges, specialMoves] = getRanges(board, 'W', initRanges, jsonRecords, pieceDefs, idDict);
        for (var id of Object.keys(initRanges)) {
            printBoard(board, `\n${game_name}, ${id}`, mapListXyToRf(initRanges[id]), null, [getPieceLoc(board, id)])
        }
    }

}
*/