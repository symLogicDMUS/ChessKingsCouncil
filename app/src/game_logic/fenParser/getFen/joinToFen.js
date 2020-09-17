

export function joinToFen(rows) {
    /*getFen TASK 4, final getting.includes(step) the fen string. join each row-string together to get fen**/
    return rows.join("/")
}

// module.exports = joinToFen;

/** for node.js
if (require.main === module) {
    console.log('test 1:')
    console.log(joinToFen(['rnbqkbnr', 'pppppppp', '########', '########', '########', '########', 'PPPPPPPP', 'RNBQKBNR']))
    console.log('\n')
    console.log('test 2:')
    console.log(joinToFen(['r###k##r', '#P######', '#####P##', 'p###n##p', '###b#BpP', 'NBQb#q##', '########', 'R###K##R']))
    console.log('\n')
    console.log('test 3:')
    console.log(joinToFen(['###k###b', 'q##r##P#', '###P#P##', '########', 'q#QK#QBr', '##NP####', '###R#R##', 'b##q##q#']))
    console.log('\n')

}
*/