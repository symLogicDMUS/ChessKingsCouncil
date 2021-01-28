import {binaryBoard} from "../../helpers/binaryBoard";

export function getSqrType(rangeBoard, rf, sqrType, rangeType) {
    if (rangeBoard[rf]) {
        sqrType = rangeType;
    } else {
        sqrType = binaryBoard[rf] ? "light_normal" : "dark_normal";
    }
    return sqrType;
}