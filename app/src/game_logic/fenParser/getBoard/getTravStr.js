


export function getTravStr(posStr) {
    /* fenParser task 1, change the posStr into a string to traverse, &&  return**/
    posStr = posStr.split('/')
    posStr.reverse()
    posStr = posStr.join("")
    return posStr
}

// module.exports = getTravStr;

/** for node.js
if (require.main === module) {
    // test 1
    console.log('test 1:')
    let travStr = getTravStr('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR')
    console.log(travStr)
    console.log("\n")
    // test 2
    console.log('test 2:')
    travStr = getTravStr('8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3')
    console.log(travStr)
    console.log("\n")
    // test 3
    console.log('test 3:')
    travStr = getTravStr('3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1')
    console.log(travStr)
    console.log("\n")

}
*/