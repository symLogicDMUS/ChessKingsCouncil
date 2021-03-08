import {getPieceImg} from "../../MyPieces/getPieceImg";
import {getStandardPieceImg} from "../../MyPieces/getStandardPieceImg";

export const getCapturedDict = (idDict, defs, capturedIds, gameType, theme) => {
    if (gameType === 'Standard') {
        return {
            W: capturedIds.W.map(id => getStandardPieceImg(id, idDict, defs, theme)),
            B: capturedIds.B.map(id => getStandardPieceImg(id, idDict, defs, theme)),
        }
    } else {
        return {
            W: capturedIds.W.map(id => getPieceImg(id, idDict, defs)),
            B: capturedIds.B.map(id => getPieceImg(id, idDict, defs)),
        }
    }
};