
export function getRotation(stepFuncName, rotationAngle) {
    /*get the step function that is a rotation of angle1 from stepFuncName**/
    let stepFuncAngle = parseInt(stepFuncName.match(`step_1sqr([0-9]+)d`)[1], 10)
    let newAngle = stepFuncAngle + rotationAngle
    if (newAngle >= 360) {
        newAngle = newAngle - 360
    }
    return `step_1sqr${newAngle}d`
}