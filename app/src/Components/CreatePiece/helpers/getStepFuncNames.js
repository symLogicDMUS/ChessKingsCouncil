
export function getStepFuncNames(angles) {
    angles = angles.map(angle => 'step_1sqr' + angle)
    return angles;
}
