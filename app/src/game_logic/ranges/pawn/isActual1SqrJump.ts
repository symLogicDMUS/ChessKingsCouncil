import {getSqrCase} from "../../sqrCase/getSqrCase";
import SqrCase from "../../types/SqrCase";
import Board from "../../types/Board";
import Color from "../../types/Color";
import XY from "../../types/XY";

export function isActual1SqrJump(board: Board, potentialJump: XY, color: Color) {
    /*if potentialJump is empty sqr return true, else return false**/
    return (
        getSqrCase(board, potentialJump[0], potentialJump[1], color) === SqrCase.ENEMY
    );
}