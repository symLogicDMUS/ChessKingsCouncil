from custom_except import *
from misc.step_funcs import step_1sqr270d, step_1sqr90d


def get_2_sqr_jump(sqr, color):
    """get the square 2 in front or 2 behind sqr"""
    if color == 'W':
        x, y = step_1sqr90d(sqr[0], sqr[1])
        x, y = step_1sqr90d(x, y)
    elif color == 'B':
        x, y = step_1sqr270d(sqr[0], sqr[1])
        x, y = step_1sqr270d(x, y)
    else:
        print('error: invalid color')
        return -1

    return (x, y)


if __name__ == "__main__":
    print(get_2_sqr_jump((1, 2), 'W'))
    print(get_2_sqr_jump((3, 7), 'B'))
