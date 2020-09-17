export function yOffsetText(y) {
    if (y < 0)
        return `down ${Math.abs(y)}`
    else
        return `up ${y}`
}
