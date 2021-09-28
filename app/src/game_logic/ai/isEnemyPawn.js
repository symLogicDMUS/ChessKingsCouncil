import { getSqrCase } from "../sqrCase/getSqrCase";
import { ENEMY } from "../sqrCase/sqrCases";
import { getPieceType } from "../pieceType/getPieceType";
import { xyToRf } from "../coordType/crdCnvrt";

export function isEnemyPawn(responseBoard, x, y, color) {
    return (
        getSqrCase(responseBoard, x, y, color) === ENEMY &&
        getPieceType(responseBoard[xyToRf(x, y)]) === "P"
    );
}
