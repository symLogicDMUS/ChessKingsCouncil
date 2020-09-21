import {stepFuncDict} from "./stepFuncs";


export function getRotation(stepFuncName, rotationAngle) {
    /*get the step function that is a rotation of angle1 from stepFuncName**/
    let stepFuncAngle = parseInt(stepFuncName.match(`step_1sqr([0-9]+)d`)[1], 10)
    let newAngle = stepFuncAngle + rotationAngle
    if (newAngle >= 360) {
        newAngle = newAngle - 360
    }
    return `step_1sqr${newAngle}d`
}

// module.exports = getRotation;

/** for node.js
if (require.main === module) {
    for (stepFuncName of ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
                          "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"]) {
            console.log(getRotation(stepFuncName, 180))
    }

}
*/