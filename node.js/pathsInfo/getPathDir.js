

function getPathDir(stepFunc) {
    /* return the path direction of the step function, in degrees**/
    if (stepFunc.name ===  'step_1sqr90d') {
        return '90d'
    }
    if (stepFunc.name ===  'step_1sqr45d') {
        return '45d'
    }
    if (stepFunc.name ===  'step_1sqr0d') {
        return '0d'
    }
    if (stepFunc.name ===  'step_1sqr315d') {
        return '315d'
    }
    if (stepFunc.name ===  'step_1sqr270d') {
        return '270d'
    }
    if (stepFunc.name ===  'step_1sqr225d') {
        return '225d'
    }
    if (stepFunc.name ===  'step_1sqr180d') {
        return '180d'
    }
    if (stepFunc.name ===  'step_1sqr135d') {
        return '135d'
    }
}

module.exports = getPathDir;