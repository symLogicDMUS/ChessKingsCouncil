const { OOB, EMPTY, FRIEND, ENEMY } = require("../sqrCase/sqrCases");
const outOfBounds = require("../sqrCase/oob");
var { xyToRf } = require("../coordType/crdCnvrt");

function getSqrCase(board, x, y, color) {
    /*get the case of square at location x, y on the board. see sqrTypes.py**/
    if (outOfBounds(x, y)) {
        return OOB;
    } else if (board[xyToRf(x, y)] === "#") {
        return EMPTY;
    } else if (board[xyToRf(x, y)][0] === color) {
        return FRIEND;
    }

    return ENEMY;
}

module.exports = getSqrCase;

if (require.main === module) {
    
    const sampleBoardDicts = require("../testObjects/sampleBoardDicts");

    var board = sampleBoardDicts["ranges_test"];
    console.log(getSqrCase(board, 3, 9, "W") === OOB);
    console.log(getSqrCase(board, 4, 4, "W") === EMPTY);
    console.log(getSqrCase(board, 3, 3, "W") === FRIEND);
    console.log(getSqrCase(board, 4, 5, "W") === ENEMY);
}
