/**test various code snipets using node.js */

function strfind(list, b) {
    /**find if b as a string in in list when all element converted to string  */
    list = list.map(el => JSON.stringify(el))
    if (list.includes(JSON.stringify(b)))
        return true
    else 
        return false
}

const pawn2SqrFirstMoves = [["a2", "a4"], ["b2", "b4"], ["c2", "c4"], ["d2", "d4"], 
                            ["e2", "e4"], ["f2", "f4"], ["g2", "g4"], ["h2", "h4"], 
                            ["a7", "a5"], ["b7", "b5"], ["c7", "c5"], ["d7", "d5"], 
                            ["e7", "e5"], ["f7", "f5"], ["g7", "g5"], ["h7", "h5"]]

let e4Opening = ["e2", "e4"]

strfind(pawn2SqrFirstMoves, e4Opening)