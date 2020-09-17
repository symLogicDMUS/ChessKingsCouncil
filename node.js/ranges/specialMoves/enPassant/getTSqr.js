const { rfToXy } = require("../../../coordType/crdCnvrt");
const  enPassants  = require("./enPassants");


function getTSqr(color, alignKey) {
    /*use alignment key to get square that pawn moves to capture by en-passant**/
    var tSqr = enPassants[color][alignKey]
    return tSqr;
}

module.exports = getTSqr;

if (require.main === module) {
    console.log(getTSqr('B', 'b4a4'))
    console.log(getTSqr('W', 'c5d5'))
}