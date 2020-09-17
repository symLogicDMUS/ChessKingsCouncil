var  specialDefs  = require("./specialDefs");


function getRangeFunc(pieceType) {
    /*return the function that gets the range for gameData **/
    return specialDefs[pieceType]
}

module.exports = getRangeFunc;

if (require.main === module) {
    console.log(getRangeFunc('Rook'))
    console.log(getRangeFunc('King'))
    console.log(getRangeFunc('Pawn'))
}