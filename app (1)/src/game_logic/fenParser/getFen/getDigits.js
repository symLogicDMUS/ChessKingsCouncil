

export function getDigits(fen) {
    /*getFen TASK 5, replace consecutive '#' (empty squares) with the digit for how many**/
    let consects = [/########/g, /#######/g, /######/g, /#####/g, /####/g, /###/g, /##/g, /#/g]
    let consectLens = [8, 7, 6, 5, 4, 3, 2, 1]
    for (let i = 0; i < consects.length; i++) {
        fen = fen.replace(consects[i], consectLens[i].toString());
    }
    return fen;
}

// module.exports = getDigits;

/** for node.js
if (require.main === module) {
    
    // test 1
    console.log('test 1')
    console.log(getDigits('rnbqkbnr/pppppppp/########/########/########/########/PPPPPPPP/RNBQKBNR'))
    console.log('\n')

    // test 2:
    console.log('test 2')
    console.log(getDigits('r###k##r/#P######/#####P##/p###n##p/###b#BpP/NBQb#q##/########/R###K##R'))
    console.log('\n')

    // test 3:
    console.log('test 3')
    console.log(getDigits('###k###b/q##r##P#/###P#P##/########/q#QK#QBr/##NP####/###R#R##/b##q##q#'))
    console.log('\n')

}
*/
