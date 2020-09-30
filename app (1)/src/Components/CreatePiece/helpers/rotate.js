
export function rotate(span, theta) {
    let angle = span.match(`[0-9]+`)[0];
    angle = Number(angle)
    let rotation = angle + theta;
    if (rotation >= 360)
        rotation = rotation - 360;
    return `${rotation}d`;
}