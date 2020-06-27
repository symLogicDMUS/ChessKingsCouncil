
export function rotate(span, theta) {
    let angle = span.match(`[0-9]+`)[0];
    angle = Number(angle)
    let rotation = angle + theta;
    return rotation;
}

console.log(rotate("90d", 180));

