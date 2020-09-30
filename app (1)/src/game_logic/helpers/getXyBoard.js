

export function getXyBoard() {
    let [board, col] = [[], []]
    for (let y = 1; y < 9; y++) {
        col = []
        for (let x = 1; x < 9; x++) {
            col.push([x, y])
        }
        board.push(col)
    }
    return board;
}

// module.exports = getXyBoard;

/** for node.js
if (require.main === module) {
    //console.log(getXyBoard())
    let xyBoard = getXyBoard()
    for (var col of xyBoard) {
        console.log(col)
    }

}
*/