
function rotate(span, theta) {
    let angle = span.match(`[0-9]+`)[0];
    angle = Number(angle)
    let rotation = angle + theta;
    if (rotation >= 360)
        rotation = rotation - 360;
    return `${rotation}d`;
}

module.exports = rotate;

if (require.main === module) {
    console.log(rotate("90d", 180));
    console.log(rotate("360d", 180));
    console.log(rotate("405d", 180));
}