import { getSqrCase } from "../sqrCase/getSqrCase";
import { ENEMY } from "../sqrCase/sqrCases";
import { getPieceType } from "../pieceType/getPieceType";
import { xyToRf } from "../coordType/crdCnvrt";
import Board from "../types/Board";
import Coord from "../types/Coord";
import Color from "../types/Color";

export function isEnemyPawn(responseBoard: Board, x: Coord, y: Coord, color: Color) {
    return (
        getSqrCase(responseBoard, x, y, color) === ENEMY &&
        getPieceType(responseBoard[xyToRf(x, y)]) === "P"
    );
}
