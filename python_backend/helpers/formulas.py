from custom_except import *
from math import sqrt


def dist(sqr1, sqr2):
    """ calculate the distance between sqr1 and sqr2 and return """
    return sqrt((sqr2[0] - sqr1[0]) ** 2 + (sqr2[1] - sqr1[1]) ** 2)


def slope(sqr1, sqr2):
    """return the slope of line defined by (x1, x2), (y1, y2) """
    try:
        s = (sqr2[1] - sqr1[1]) / (sqr2[0] - sqr1[0])
    except ZeroDivisionError:
        s = 'oo'
    finally:
        return s


if __name__ == "__main__":
    # test 1, slope divide by 0:
    print('test 1, divide by 0:')
    print(slope((3, 3), (3, 5)) == 'oo')
    print('\n')

    # test 2, slope:
    print('test 2:')
    print(slope((3, 3), (5, 5)) == 1)
    print('\n')

    # test 3, dist:
    print('test 3:')
    print(dist((3, 3), (4, 4)) == sqrt(2))
    print('\n')

    # test 5, dist:
    print('test 4:')
    print(dist((3, 3), (1, 4)) == sqrt(5))
    print('\n')
