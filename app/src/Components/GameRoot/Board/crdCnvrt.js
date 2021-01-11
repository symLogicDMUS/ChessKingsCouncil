const xMapR = [null, "a", "b", "c", "d", "e", "f", "g", "h"];
const yMapTop = [null, 7, 6, 5, 4, 3, 2, 1, 0];

export function xyToRf(x, y) {
    const r = xMapR[x];
    const f = yMapTop[y].toString(10);
    return r + f;
}

export function rfToXy(rf) {
    const x = xMapR.indexOf(rf[0]);
    const y = Number(rf[1]);
    return [x, y];
}

export function xyToPx(x, y, sqrSize) {
    let left = (x-1)*sqrSize
    let top = yMapTop[y]*sqrSize
    return [left, top]
}

export function rfToGridLoc(rf) {
    let [x, y] = rfToXy(rf);
    return { gridColumn: yMapTop[x], gridRow: yMapTop[y] };
}

export default { xyToRf, rfToXy };
