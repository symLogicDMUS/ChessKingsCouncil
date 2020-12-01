
export function getAngle(stepFuncName) {
    return stepFuncName.match(/[0-9]+d/)[0]
}