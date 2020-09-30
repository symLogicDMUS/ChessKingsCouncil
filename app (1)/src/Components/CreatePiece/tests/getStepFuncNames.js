
function getStepFuncNames(angles) {
    angles = angles.map(angle => 'step_1sqr' + angle)
    return angles;
}

module.exports = getStepFuncNames;

if (require.main === module) {
    getStepFuncNames()
}