
def _get_path_dir(step_func):
    """ return the path direction of the step function, in degrees"""
    if step_func.__name__ ==  'step_1sqr90d':
        return '90d'
    if step_func.__name__ ==  'step_1sqr45d':
        return '45d'
    if step_func.__name__ ==  'step_1sqr0d':
        return  '0d'
    if step_func.__name__ ==  'step_1sqr315d':
        return '315d'
    if step_func.__name__ ==  'step_1sqr270d':
        return '270d'
    if step_func.__name__ ==  'step_1sqr225d':
        return '225d'
    if step_func.__name__ ==  'step_1sqr180d':
        return '180d'
    if step_func.__name__ ==  'step_1sqr135d':
        return '135d'
