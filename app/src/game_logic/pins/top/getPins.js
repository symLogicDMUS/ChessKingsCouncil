import {isPin} from "../isPin";
import {getPin} from "../getPin";
import {getPieceType} from "../../pieceType/getPieceType";
import {getResetPieceDicts} from "../../getters/getResetPieceDicts";


export function getPins(pdDict, pins) {
    /**get dict, let key = pieceId, let value = coordList
       pieceId: a pinned piece 
       coordList: path the piece is pinned to.
    */
    //var pins = {}
    var pieceId, coordPath;
    for (var pathData of Object.values(pdDict)) {
        if (isPin(pathData)) {
            [pieceId, coordPath] = getPin(pathData);
            if (getPieceType(pieceId) === 'K') {
                continue
            }
            pins[pieceId] = coordPath;
        }
    }
    return pins;
}

// module.exports = getPins;

/** for node.js
if (require.main === module) {

    import {getStandardPieceDefs} from "../../testObjects/getStandardPieceDefs";
    import {getStandardIdDict} from "../../testObjects/getStandardIdDict";
    import {printBoard} from "../../printers/printBoard";
    import {getPathdataDict} from "../../pathsInfo/top/getpathDataDict";
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {mapListXyToRf} from "../../coordType/mapListXyToRf";
    import {getPieceLoc} from "../../helpers/getPieceLoc";
    import {getPieceLocs} from "../../helpers/getPieceLocs";
    import {allExcept} from "../../helpers/allExcept";
    import {mapDictListXyToRf} from "../../coordType/mapDictListXyToRf"
    import {mapDictListRfToXy} from "../../coordType/mapDictListXyToRf"
    import {mapListRfToXy} from "../../coordType/mapListRfToXy";

    var rangeDefs = getStandardPieceDefs()
    var idDict = getStandardIdDict()
    var pins, board, pdDict;
    var allPins = []
    var ids = []


    board = sampleBoardDicts["check_example3"];
    pdDict = getPathdataDict(board, [4, 4], 'W', rangeDefs, idDict)
    var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, 'W')
    pins = getPins(pdDict, pins)
    allPins = []
    ids = []
    for (var id of Object.keys(pins)) {
        allPins.push(...allExcept(mapListXyToRf(pins[id]), getPieceLoc(board, id)))
        ids.push(id)
    }
    printBoard(board, "\ncheck_example3", getPieceLocs(board, ids), null, null, allPins)
    console.log(pins)

    board = sampleBoardDicts["knight_threat2"];
    pdDict = getPathdataDict(board, [5, 1], 'W', rangeDefs, idDict)
    var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, 'W')
    pins = getPins(pdDict, pins)
    allPins = []
    ids = []
    for (var id of Object.keys(pins)) {
        allPins.push(...allExcept(mapListXyToRf(pins[id]), getPieceLoc(board, id)))
        ids.push(id)
    }
    printBoard(board, "\nknight_threat2", getPieceLocs(board, ids), null, null, allPins)
    console.log(pins)

    board = sampleBoardDicts["super_checkmate_impossible_example"];
    pdDict = getPathdataDict(board, [6, 6], 'W', rangeDefs, idDict)
    var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, 'W')
    pins = getPins(pdDict, pins)
    allPins = []
    ids = []
    for (var id of Object.keys(pins)) {
        allPins.push(...allExcept(mapListXyToRf(pins[id]), getPieceLoc(board, id)))
        ids.push(id)
    }
    printBoard(board, "\nsuper_checkmate_impossible_example", getPieceLocs(board, ids), null, null, allPins)
    console.log(pins)

    board = sampleBoardDicts["pinned_ex1"];
    pdDict = getPathdataDict(board, [4, 7], 'W', rangeDefs, idDict)
    var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, 'W')
    pins = getPins(pdDict, pins)
    allPins = []
    ids = []
    for (var id of Object.keys(pins)) {
        allPins.push(...allExcept(mapListXyToRf(pins[id]), getPieceLoc(board, id)))
        ids.push(id)
    }
    printBoard(board, "\npinned_ex1", getPieceLocs(board, ids), null, null, allPins)
    console.log(pins)

    board = sampleBoardDicts["pinned_ex2"];
    pdDict = getPathdataDict(board, [4, 5], 'W', rangeDefs, idDict)
    var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, 'W')
    pins = getPins(pdDict, pins)
    allPins = []
    ids = []
    for (var id of Object.keys(pins)) {
        allPins.push(...allExcept(mapListXyToRf(pins[id]), getPieceLoc(board, id)))
        ids.push(id)
    }
    printBoard(board, "\npinned_ex2", getPieceLocs(board, ids), null, null, allPins)
    console.log(pins)

}
*/