
export function dist(sqr1, sqr2) {
    /* calculate the distance between sqr1 &&  sqr2 &&  return **/
    var res = Math.sqrt((sqr2[0] - sqr1[0]) ** 2 + (sqr2[1] - sqr1[1]) ** 2)
    return res;
}

export function slope(sqr1, sqr2) {
    /*return the slope of line defined by (x1, x2), (y1, y2) **/
    let s = (sqr2[1] - sqr1[1]) / (sqr2[0] - sqr1[0])
    return s;
}

// // module.exports = {dist, slope}

/** for node.js
if (require.main === module) {
    // test 1, slope divide by 0:
    console.log('test 1, divide by 0:')
    console.log(slope([3, 3], [3, 5]) === Infinity)
    console.log('\n')
    // test 2, slope:
    console.log('test 2:')
    console.log(slope([3, 3], [5, 5]) === 1)
    console.log('\n')
    // test 3, dist:
    console.log('test 3:')
    console.log(dist([3, 3], [4, 4]) === Math.sqrt(2))
    console.log('\n')
    // test 5, dist:
    console.log('test 4:')
    console.log(dist([3, 3], [1, 4]) === Math.sqrt(5))
    console.log('\n')

}
*/