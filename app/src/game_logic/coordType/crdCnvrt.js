const xMapR = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
Object.preventExtensions(xMapR);
Object.seal(xMapR);
Object.freeze(xMapR);

export function xyToRf(x, y) {
    /**sqr may be sent as 2 arguments x and y, or 1 argument [x, y] */
    var r = xMapR[x];
    var f = y.toString();
    return r + f;
}

export function rfToXy(rf) {
    var x = xMapR.indexOf(rf[0]);
    var y = Number(rf[1]);
    return [x, y];
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