import {specialPieceImg} from "../../API/sampleData/specialThemeImgs/specialPieceImg/prod";
import {standardPieceDefs} from "../NewGame/standardPieceDefs/prod";

/**
 *
 * @param piecesObj: {id1: {left: x, top: y, src: base64Str}, ... id(n): {left: x, top: y, src: base64Str}}
 * @param idDict
 * @returns {null}
 */
export function setStandardImgs(piecesObj, idDict) {
    let color, pieceName;
    for (const pieceId of Object.keys(piecesObj)) {
        color = pieceId[0]
        pieceName = idDict[pieceId[1].toLowerCase()];
        if (Object.keys(specialPieceImg).includes(pieceName)) {
            piecesObj[pieceId].src = specialPieceImg[pieceName][color];
        } else {
            piecesObj[pieceId].src = standardPieceDefs[pieceName][color].img
        }
    }
    return piecesObj;
}