
export function getPosStr(fen) {
    /*fenParser task 0, return the position part of the fen string**/
    let res = fen.match(`([a-zA-Z0-8]+/){7}([a-zA-Z0-8]+)`)
    if (res  !== null) {
        let posStr = res[0]
        return posStr
    }
    else {
        console.log('error: position string ! found')
        return -1
    }
}

// module.exports = getPosStr;

/** for node.js
if (require.main === module) {
    // test 1:
    console.log('test 1:')
    posStr = getPosStr('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    console.log(posStr)
    console.log('test 2:')
    posStr = getPosStr("r4rk1/1pp1qppp/2nbbn2/pP1pp3/3PP3/2NBBN2/P1P1QPPP/R3K2R w KQ a6 0 10")
    console.log(posStr)
    console.log('\n')

}
*/