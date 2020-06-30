
function rotate(span, theta) {
    let angle = span.match(`[0-9]+`)[0];
    angle = Number(angle)
    let rotation = angle + theta;
    return rotation;
}

module.exports = rotate;

if (require.main === module) {
    console.log(rotate("90d", 180));
    console.log('')
}

