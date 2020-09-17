

export function getPieceFen(id_) {
    /*getFen TASK 2.1, take the game id of a piece &&  convert it a fen id**/
    if (id_[0] === 'B') {
        return id_[1].toLowerCase()
    }
    else if (id_[0] === 'W') {
        return id_[1]
    }
    else {
        console.log('error occured  with game id || piece')
        return -1
    }
}

// module.exports = getPieceFen;

/** for node.js
if (require.main === module) {
    
    // white:
    console.log(getPieceFen('WB2'))
    console.log(getPieceFen('WQ1'))
    console.log(getPieceFen('WK1'))
    console.log(getPieceFen('WN1'))
    console.log(getPieceFen('WR2'))
    console.log(getPieceFen('WP3'))
    
    // black:
    console.log(getPieceFen('BB2'))
    console.log(getPieceFen('BQ1'))
    console.log(getPieceFen('BK1'))
    console.log(getPieceFen('BN1'))
    console.log(getPieceFen('BR2'))
    console.log(getPieceFen('BP3'))

}
*/

