import SqrContent from "../types/SqrContent";
import XY from "../types/XY";

export function getSubPath(path: XY [], i: number) {
    /*get up to &&  including the index i in path**/
    return path.slice(0, i + 1);
}