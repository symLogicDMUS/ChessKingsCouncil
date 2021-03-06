const xMapR = [undefined, "a", "b", "c", "d", "e", "f", "g", "h"];
const xyMapGrid = [undefined, 8, 7, 6, 5, 4, 3, 2, 1];

export function xyToRf(x, y) {
    const r = xMapR[x];
    const f = y.toString(10);
    return r + f;
}

export function xyToRfMapGrid(x, y) {
    const r = xMapR[x];
    const f = xyMapGrid[y].toString(10);
    return r + f;
}

export function rfToXy(rf) {
    const x = xMapR.indexOf(rf[0]);
    const y = Number(rf[1]);
    return [x, y];
}

export function rfToGridLoc(rf) {
    let [x, y] = rfToXy(rf);
    return { gridColumn: xyMapGrid[x], gridRow: xyMapGrid[y] };
}

export default { xyToRf, rfToXy };
