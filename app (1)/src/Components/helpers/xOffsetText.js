export function xOffsetText(x) {
    if (x < 0)
        return `left ${Math.abs(Math.abs(x))} `
    else
        return `right ${x} `
}
