
function getAngle(stepFuncName) {
    let angle = stepFuncName.match(/[0-9]+d/)[0];
    return angle
}
module.exports = getAngle

if (require.main === module) {
    var stepFuncNames = ["step_1sqr90d", "step_1sqr45d", "step_1sqr0d", "step_1sqr315d", "step_1sqr270d",
        "step_1sqr225d", "step_1sqr180d", "step_1sqr135d"];
    for (var stepFuncName of stepFuncNames)
    console.log(getAngle(stepFuncName))
}