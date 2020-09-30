import {isalpha} from "../../helpers/isalpha";
import {isupper} from "../../helpers/isupper";


export function convertId(fenId) {
    /* fenParser task 4, convert fen id to a game id**/
    if (isupper(fenId)) {
        return 'W' + fenId
    }
    else {
        return 'B' + fenId.toUpperCase()
    }
}


export function convertIds(posList) {
    /*convert each the.includes(fenId) posList to a game id**/
    for (let i = 0; i < posList.length; i++) {
        if (posList[i].length === 1 && isalpha(posList[i])) {
            posList[i] = convertId(posList[i])
        }
    }
    return posList
}

// module.exports = convertIds;

/** for node.js
if (require.main === module) {
    // test 1:
    console.log('test 1:')
    let posList = convertIds( ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R', 'P', 'P', 'P', 
                             'P', 'P', 'P', 'P', 'P', '#', '#', '#', '#', '#', '#', 
                             '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 
                             '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 
                             '#', '#', '#', '#', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 
                             'p', 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'])
    console.log(posList)
    console.log("\n")

    // test 2
    console.log('test 2')
    posList = convertIds( ['#', 'R', 'L', 'T', 'K', '#', '#', '#', '#', '#', '#',
                             '#', '#', '#', '#', '#', 'R', 'N', 'B', 'Q', '#', 'B', 
                             'N', 'R', '#', '#', '#', '#', '#', '#', '#', '#', 'r', 
                             'n', 'b', 'q', '#', 'b', 'n', 'r', '#', '#', '#', 'k', 
                             '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 
                             '#', '#', '#', '#', '#', '#', '#', '#', '#'])
    console.log(posList)
    console.log("\n")

}
*/