import {outOfBounds} from "../sqrCase/oob";

export function getCoordPath(x, y, takeStep) {
    /**
    travel a path from location x, y (rankfile) recording the coordinate of each square
    until step out of bounds. direction depends on which step function takeStep is
    */
    [x, y] = takeStep(x, y)
    let coordList = []
    while (! outOfBounds(x, y)) {
        coordList.push([x, y]);
        [x, y] = takeStep(x, y);
    }
    return coordList
}
