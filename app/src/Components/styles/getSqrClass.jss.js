import {binaryBoard} from "../helpers/binaryBoard";

export function getSqrClass(rf, condition) {
    if (binaryBoard[rf]) {
        if (condition) return 'light_in_range'
        else return 'light_normal'
    }
    else {
        if (condition) return 'dark_in_range'
        else return 'dark_normal'
    }
}

export function getInteractiveSqrClass(rf, canDrop) {
    if (binaryBoard[rf]) {
        if (canDrop) return 'light_in_range'
        else return 'transparent'
    }
    else {
        if (canDrop) return 'dark_in_range'
        else return 'transparent'
    }
}