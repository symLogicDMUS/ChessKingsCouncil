

export function getPathDir(stepFuncName) {
    /* return the path direction of the step function, in degrees**/
    if (stepFuncName ===  'step_1sqr90d') {
        return '90d'
    }
    if (stepFuncName ===  'step_1sqr45d') {
        return '45d'
    }
    if (stepFuncName ===  'step_1sqr0d') {
        return '0d'
    }
    if (stepFuncName ===  'step_1sqr315d') {
        return '315d'
    }
    if (stepFuncName ===  'step_1sqr270d') {
        return '270d'
    }
    if (stepFuncName ===  'step_1sqr225d') {
        return '225d'
    }
    if (stepFuncName ===  'step_1sqr180d') {
        return '180d'
    }
    if (stepFuncName ===  'step_1sqr135d') {
        return '135d'
    }
}

// module.exports = getPathDir;