from custom_except import *

"""
methods are numbered by, and listed in order of, degrees counterclockwise from x axis.
"""


def step_1sqr0d(x, y):
    """step 1 square 0 degrees"""
    x += 1
    return x, y


def step_1sqr45d(x, y):
    """step 1 square 45 degrees"""
    x += 1
    y += 1
    return x, y


def step_1sqr90d(x, y):
    """step 1 square 90 degrees"""
    y += 1
    return x, y


def step_1sqr135d(x, y):
    """step 1 square 135 degrees"""
    x -= 1
    y += 1
    return x, y


def step_1sqr180d(x, y):
    """step 1 square 180 degrees"""
    x -= 1
    return x, y


def step_1sqr225d(x, y):
    """step 1 square 225 degrees"""
    x -= 1
    y -= 1
    return x, y


def step_1sqr270d(x, y):
    """step 1 square 270 degrees"""
    y -= 1
    return x, y


def step_1sqr315d(x, y):
    """step 1 square 315 degrees"""
    x += 1
    y -= 1
    return x, y


step_func_list = [step_1sqr90d, step_1sqr45d, step_1sqr0d, step_1sqr315d, step_1sqr270d,
                  step_1sqr225d, step_1sqr180d, step_1sqr135d]

step_func_dict = {
    "step_1sqr90d": step_1sqr90d,
    "step_1sqr45d": step_1sqr45d,
    "step_1sqr0d": step_1sqr0d,
    "step_1sqr315d": step_1sqr315d,
    "step_1sqr270d": step_1sqr270d,
    "step_1sqr225d": step_1sqr225d,
    "step_1sqr180d": step_1sqr180d,
    "step_1sqr135d": step_1sqr135d
}

if __name__ == "__main__":
    print(step_1sqr90d(4, 4) == (4, 5))
    print(step_1sqr45d(4, 4) == (5, 5))
    print(step_1sqr0d(4, 4) == (5, 4))
    print(step_1sqr315d(4, 4) == (5, 3))
    print(step_1sqr270d(4, 4) == (4, 3))
    print(step_1sqr225d(4, 4) == (3, 3))
    print(step_1sqr180d(4, 4) == (3, 4))
    print(step_1sqr135d(4, 4) == (3, 5))
