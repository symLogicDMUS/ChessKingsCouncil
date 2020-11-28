import { binaryBoard } from "./binaryBoard";

export function getSqrClassName(rf, condition, classes) {
    if (condition) {
        return binaryBoard[rf] ? classes.light_in_range : classes.dark_in_range;
    } else {
        return binaryBoard[rf] ? classes.light_normal : classes.dark_normal;
    }
}
