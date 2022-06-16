import { restriction } from "../../restriction/restriction";
import { getPieceType } from "../../pieceType/getPieceType";
import { intersection } from "../../helpers/setOps";

// initRanges, pins, threatArea, finalRanges, mtRestrict
export function getFinalRanges(
    initRanges: Range,
    pins: Range,
    threatArea,
    finalRanges: Range,
    mtRestriction: Range
) {
    /**the final range is the intersection of the initial range, pin, threat area, &&  multi-threat restriction
     :param initRanges:
     :param pins:
     :param threatArea:
     :param finalRanges:
     :param mtRestriction:
     :return:
     */
    let a, b, c, d, e, f, g;

    for (const id of Object.keys(finalRanges)) {
        if (getPieceType(id) === "K") {
            finalRanges[id] = initRanges[id];
        } else {
            a = new Set(initRanges[id]);
            b = restriction(pins[id]);
            c = restriction(threatArea);
            d = restriction(mtRestriction[id]);

            e = intersection(a, b);
            f = intersection(e, c);
            g = intersection(f, d);

            finalRanges[id] = Array.from(g);
        }

        finalRanges[id] = Array.from(finalRanges[id]);
    }

    return finalRanges;
}

// module.exports = getFinalRanges;

/** for node.js
if (require.main === module) {
    
    import {printBoard} from "../../printers/printBoard";
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {getPieceLoc} from "../../helpers/getPieceLoc";

    var board, initPieceDict, initRanges, pins, threatArea, finalRanges, mtRestriction;

    initPieceDict = require("../../testObjects/hover-off/initPieceDicts/check_example3")
    initRanges = require("../../testObjects/hover-off/initRangeDicts/check_example3");
    pins = require("../../testObjects/hover-off/pinDicts/check_example3");
    threatArea = require("../../testObjects/hover-off/threatAreaLists/check_example3")
    mtRestriction = require("../../testObjects/hover-off/restrictionDicts/check_example3")
    board = sampleBoardDicts['check_example3']

    finalRanges = getFinalRanges(initRanges, pins, threatArea, initPieceDict, mtRestriction)
    for (var id of Object.keys(finalRanges)) {
        printBoard(board, `\ncheck_example3, ${id}`, finalRanges[id], null, getPieceLoc(board, id))
    }


    initPieceDict = require("../../testObjects/hover-off/initPieceDicts/knight_threat2")
    initRanges = require("../../testObjects/hover-off/initRangeDicts/knight_threat2");
    pins = require("../../testObjects/hover-off/pinDicts/knight_threat2");
    threatArea = require("../../testObjects/hover-off/threatAreaLists/knight_threat2")
    mtRestriction = require("../../testObjects/hover-off/restrictionDicts/knight_threat2")
    board = sampleBoardDicts['knight_threat2']

    finalRanges = getFinalRanges(initRanges, pins, threatArea, initPieceDict, mtRestriction)
    for (var id of Object.keys(finalRanges)) {
        printBoard(board, `\nknight_threat2, ${id}`, finalRanges[id], null, getPieceLoc(board, id))
    }


    initPieceDict = require("../../testObjects/hover-off/initPieceDicts/super_checkmate_impossible_example")
    initRanges = require("../../testObjects/hover-off/initRangeDicts/super_checkmate_impossible_example");
    pins = require("../../testObjects/hover-off/pinDicts/super_checkmate_impossible_example");
    threatArea = require("../../testObjects/hover-off/threatAreaLists/super_checkmate_impossible_example")
    mtRestriction = require("../../testObjects/hover-off/restrictionDicts/super_checkmate_impossible_example")
    board = sampleBoardDicts['super_checkmate_impossible_example']

    finalRanges = getFinalRanges(initRanges, pins, threatArea, initPieceDict, mtRestriction)
    for (var id of Object.keys(finalRanges)) {
        printBoard(board, `\nsuper_checkmate_impossible_example, ${id}`, finalRanges[id], null, getPieceLoc(board, id))
    }

}
*/
