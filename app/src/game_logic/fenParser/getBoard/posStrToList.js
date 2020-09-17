

export function posStrToList(posStr) {
    /*fenParser task 3, convert the pos string to a list &&  return**/
    return posStr.split("")
}

// module.exports = posStrToList;

/** for node.js
if (require.main === module) {
    // test 1
    console.log("test 1:")
    let posList = posStrToList('RNBQKBNRPPPPPPPP################################pppppppprnbqkbnr')
    console.log(posList)
    console.log("\n")
    // test 2
    console.log("test 2:")
    posList = posStrToList('#RBRK###########RNBQ#BNR########rnbq#bnr###k####################')
    console.log(posList)
    console.log("\n")
    // test 3
    console.log("test 3:")
    posList = posStrToList('b##q##q####R#R####NP####q#QK#QBr###########P#P##q##r##P####k###b')
    console.log(posList)

}
*/