var xMapR = [undefined, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

export function xyToRf(x, y) {
    var r = xMapR[x];
    var f = y.toString(10);
    return r + f;
}

export function rfToXy(rf) {
    var x = xMapR.indexOf(rf[0]);
    var y = Number(rf[1]);
    return [x, y];
}

export default {xyToRf, rfToXy};