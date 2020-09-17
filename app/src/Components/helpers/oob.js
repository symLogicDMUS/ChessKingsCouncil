import {rfToXy} from "./crdCnvrt"

export function outOfBounds(rf) {
    /*return true if (x, y) is out of bounds, else false**/
    let [x, y] = rfToXy(rf)
    if (x < 1 || x > 8 || y < 1 || y > 8) {
        return true
    }
    else {
        return false
    }
}