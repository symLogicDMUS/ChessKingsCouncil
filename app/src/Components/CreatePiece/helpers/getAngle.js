
export function getAngle(stepFuncName) {
    let angle = stepFuncName.match(/[0-9]+d/)[0];
    return angle
}