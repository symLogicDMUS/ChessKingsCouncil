
function xOffset(x) {
    if (x < 0)
        return `left ${Math.abs(x)}`
    else
        return `right ${x}`
}

exports.xOffset = xOffset;

if (require.main === module) {
    console.log(xOffset(-5))
    console.log(xOffset(2))
}