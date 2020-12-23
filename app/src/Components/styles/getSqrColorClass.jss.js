import {binaryBoard} from "../helpers/binaryBoard";

export function getRangeSqrClass(rf, condition, classes) {
    if (condition) {
        if (binaryBoard[rf]) return classes.light_in_range
        else return classes.dark_in_range
    } else {
        if (binaryBoard[rf]) return classes.light_normal
        else return classes.dark_normal
    }
}

export function getInteractiveSqrClass(rf, condition, classes) {
    if (condition) {
        if (binaryBoard[rf]) return classes.light_in_range
        else return classes.dark_in_range
    } else {
        return classes.none
    }
}