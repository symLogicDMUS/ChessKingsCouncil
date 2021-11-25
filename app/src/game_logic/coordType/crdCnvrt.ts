import Coord from "../types/Coord";
import Rank from "../types/Rank";
import Rankfile from "../types/Rankfile";
import XY from "../types/XY";

const xMapR = [null, "a", "b", "c", "d", "e", "f", "g", "h"];
Object.preventExtensions(xMapR);
Object.seal(xMapR);
Object.freeze(xMapR);

export function xyToRf(x: Coord, y: Coord): Rankfile {
    /**sqr may be sent as 2 arguments x and y, or 1 argument [x, y] */
    const r = xMapR[x];
    const f = y.toString();
    return r + f as Rankfile;
}

export function rfToXy(rf: Rankfile): XY {
    const x = xMapR.indexOf(rf[0]);
    const y = Number(rf[1]);
    return [x, y] as XY;
}

// module.exports = {xyToRf, rfToXy};

/** for node.js
if (require.main === module) {
    import {getXyBoard} from "../helpers/getXyBoard";
    let xyBoard = getXyBoard();
    let board = {}
    for (let y = 0; y < xyBoard.length; y++) {
        for (let x = 0; x < xyBoard[y].length; x++) {
            xyBoard[y][x] = xyToRf(xyBoard[y][x][0], xyBoard[y][x][1])
        }
    }
    console.log(xyBoard)

}
*/
