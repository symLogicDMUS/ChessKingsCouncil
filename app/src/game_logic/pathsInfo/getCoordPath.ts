import { outOfBounds } from "../sqrCase/oob";
import Coord from "../types/Coord";
import Stepper from "../types/Stepper";

export function getCoordPath(x: Coord, y: Coord, takeStep: Stepper) {
    /**
    travel a path from location x, y (rankfile) recording the coordinate of each square
    until step out of bounds. direction depends on which step function takeStep is
    */
    [x as number, y as number] = takeStep(x, y);
    let coordList = [];
    while (!outOfBounds(x, y)) {
        coordList.push([x as Coord, y as Coord]);
        [x as number, y as number] = takeStep(x, y);
    }
    return coordList;
}
