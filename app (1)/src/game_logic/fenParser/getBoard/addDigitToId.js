

export function addDigitToId(posList) {
    /*fenParser task 5, add a digit to each the.includes(id) posList. the digit is what number occurence of that id**/
    let idCounters = {}
    for (let i = 0; i < posList.length; i++) {
        if (posList[i] != '#') {
            if (Object.keys(idCounters).includes(posList[i])) {
                idCounters[posList[i]] += 1
            }
            else {
                idCounters[posList[i]] = 1
            }
            posList[i] = posList[i] + idCounters[posList[i]].toString();
        }
    }
    return posList
}

// module.exports = addDigitToId;

/** for node.js
if (require.main === module) {
    // test 1
    console.log("test 1:")
    let posList = addDigitToId(['WR', 'WN', 'WB', 'WQ', 'WC', 'WV', 'WN', 'WR', 'WP',
                                'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
                                'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP',
                                'BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR']
                               )
    console.log(posList)
    console.log("\n")

    // test 2:
    console.log("test 2:")
    posList = addDigitToId(['#', 'WR', 'WB', 'WR', 'WK', '#', '#', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', 'WR', 'WN', 'WB',
                                'WQ', '#', 'WB', 'WN', 'WR', '#', '#', '#', '#', '#',
                                '#', '#', '#', 'BR', 'BN', 'BB', 'BQ', '#', 'BB', 'BN',
                                'BR', '#', '#', '#', 'BK', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#'])
    console.log(posList)
    console.log("\n")
    
    // test 3:
    console.log("test 3:")
    posList = addDigitToId(['BB', '#', '#', 'BQ', '#', '#', 'BQ', '#',
                                '#', '#', '#', 'WR', '#', 'WR', '#', '#',
                                '#', '#', 'WN', 'WP', '#', '#', '#', '#',
                                'BQ', '#', 'WQ', 'WK', '#', 'WQ', 'WB', 'BR',
                                '#', '#', '#', '#', '#', '#', '#', '#',
                                '#', '#', '#', 'WP', '#', 'WP', '#', '#',
                                'BQ', '#', '#', 'BR', '#', '#', 'WP', '#',
                                '#', '#', '#', 'BK', '#', '#', '#', 'BB'])
    console.log(posList)
    console.log("\n")

}
*/
    

