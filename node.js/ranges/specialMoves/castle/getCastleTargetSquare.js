var  castleTargetSquares  = require("./castleTargetSquares");
const { rfToXy } = require("../../../coordType/crdCnvrt")

function getCastleTargetSquare(color, side) {
    /*get the target square of the castle for the given color king &&  on given side of king**/
    return rfToXy(castleTargetSquares[color][side])
}

module.exports = getCastleTargetSquare;

if (require.main === module) {
    console.log(getCastleTargetSquare('W', 'Q'))    
    console.log(getCastleTargetSquare('W', 'K'))    
    console.log(getCastleTargetSquare('B', 'Q'))    
    console.log(getCastleTargetSquare('B', 'K'))
}