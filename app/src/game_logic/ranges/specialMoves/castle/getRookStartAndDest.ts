import Rankfile from "../../../types/Rankfile";
import { rookStartAndDest } from "./rookStartAndDest";

export function getRookStartAndDest(kingPos: Rankfile): [Rankfile, Rankfile] {
    /*get the start &&  dest of a particular rook during a castle**/
    const [rStart, rDest] = rookStartAndDest[kingPos];
    return [rStart as Rankfile, rDest as Rankfile];
}