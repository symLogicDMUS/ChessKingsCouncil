const xMapR = [undefined, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export function xyToRf(x, y) {
    const r = xMapR[x];
    const f = y.toString(10);
    return r + f;
}

export function rfToXy(rf) {
    const x = xMapR.indexOf(rf[0]);
    const y = Number(rf[1]);
    return [x, y];
}

export default {xyToRf, rfToXy};