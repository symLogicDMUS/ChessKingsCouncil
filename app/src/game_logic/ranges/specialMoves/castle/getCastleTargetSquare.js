import {castleTargetSquares} from "./castleTargetSquares";
import {rfToXy} from "../../../coordType/crdCnvrt"

export function getCastleTargetSquare(color, side) {
    /*get the target square of the castle for the given color king &&  on given side of king**/
    return rfToXy(castleTargetSquares[color][side])
}

// module.exports = getCastleTargetSquare;

/** for node.js
if (require.main === module) {
    console.log(getCastleTargetSquare('W', 'Q'))    
    console.log(getCastleTargetSquare('W', 'K'))    
    console.log(getCastleTargetSquare('B', 'Q'))    
    console.log(getCastleTargetSquare('B', 'K'))

}
*/