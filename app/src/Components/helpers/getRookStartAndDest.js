import { rookStartAndDest } from "./rookStartAndDest";
export function getRookStartAndDest(kingPos) {
    /*get the start and dest of a particular rook during a castle**/
    const [rStart, rDest] = rookStartAndDest[kingPos];
    return [rStart, rDest];
}
