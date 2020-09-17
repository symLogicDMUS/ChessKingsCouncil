function yOffset(y) {
    if (y < 0)
        return `down ${y}, `
    else
        return `up ${y}, `
}

exports.yOffset = yOffset;

if (require.main === module) {
    console.log(yOffset(-8))
    console.log(yOffset(6))
}
