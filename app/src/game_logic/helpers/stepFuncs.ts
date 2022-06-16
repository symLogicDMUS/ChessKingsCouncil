/**
methods are numbered by, and order.includes(listed) of, degrees counterclockwise from x axis.
*/
import Angle from "../types/Angle";
import Coord from "../types/Coord";

export function step_1sqr0d(x: Coord, y: Coord): [number, number] {
    /*step 1 square 0 degrees**/
    x += 1;
    return [x as Coord, y];
}

export function step_1sqr45d(x: Coord, y: Coord): [number, number] {
    /*step 1 square 45 degrees**/
    x += 1;
    y += 1;
    return [x as Coord, y as Coord];
}

export function step_1sqr90d(x: Coord, y: Coord): [number, number] {
    /*step 1 square 90 degrees**/
    y += 1;
    return [x, y as Coord];
}

export function step_1sqr135d(x: Coord, y: Coord): [number, number] {
    /*step 1 square 135 degrees**/
    x -= 1;
    y += 1;
    return [x as Coord, y as Coord];
}

export function step_1sqr180d(x: Coord, y: Coord): [number, number] {
    /*step 1 square 180 degrees**/
    x -= 1;
    return [x as Coord, y];
}

export function step_1sqr225d(x: Coord, y: Coord): [number, number] {
    /*step 1 square 225 degrees**/
    x -= 1;
    y -= 1;
    return [x as Coord, y as Coord];
}

export function step_1sqr270d(x: Coord, y: Coord): [number, number] {
    /*step 1 square 270 degrees**/
    y -= 1;
    return [x, y as Coord];
}

export function step_1sqr315d(x: Coord, y: Coord): [Coord, Coord] {
    /*step 1 square 315 degrees**/
    x += 1;
    y -= 1;
    return [x as Coord, y as Coord];
}

export var angles: Angle [] = [
    "90d",
    "45d",
    "0d",
    "315d",
    "270d",
    "225d",
    "180d",
    "135d",
];

export var stepFuncDict = {
    "step_1sqr90d": step_1sqr90d,
    "step_1sqr45d": step_1sqr45d,
    "step_1sqr0d": step_1sqr0d,
    "step_1sqr315d": step_1sqr315d,
    "step_1sqr270d": step_1sqr270d,
    "step_1sqr225d": step_1sqr225d,
    "step_1sqr180d": step_1sqr180d,
    "step_1sqr135d": step_1sqr135d,
};