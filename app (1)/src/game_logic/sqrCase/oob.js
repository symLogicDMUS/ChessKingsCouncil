

export function outOfBounds(x, y) {
    /*return true if (x, y) is out of bounds, else false**/
    if (x < 1 || x > 8 || y < 1 || y > 8) {
        return true
    }
    else {
        return false
    }
}

// module.exports = outOfBounds;

/** for node.js
if (require.main === module) {
    console.log(outOfBounds(0, 1) === true)
    console.log(outOfBounds(9, 1) === true)
    console.log(outOfBounds(1, 0) === true)
    console.log(outOfBounds(1, 9) === true)
    console.log(outOfBounds(1, 1) === false)
    console.log(outOfBounds(3, 7) === false)

}
*/