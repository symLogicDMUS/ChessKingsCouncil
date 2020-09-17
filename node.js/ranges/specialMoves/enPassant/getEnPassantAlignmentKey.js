const  {xyToRf}  = require("../../../coordType/crdCnvrt");


function getEnPassantAlignmentKey(sqr1, sqr2) {
    /* takes 2 (x,y) coordinates as input, &&  returns their rankfiles concatinated**/
    let rf1 = xyToRf(...sqr1)
    let rf2 = xyToRf(...sqr2)
    return rf1 + rf2
}

module.exports = getEnPassantAlignmentKey;

if (require.main === module) {
    console.log(getEnPassantAlignmentKey([2, 4], [3, 4]))
}