from custom_except import *
def out_of_bounds(x, y):
    """return true if (x, y) is out of bounds, else false"""
    if x < 1 or x > 8 or y < 1 or y > 8:
        return True
    else:
        return False


if __name__ == '__main__':
    print(out_of_bounds(0, 1) == True)
    print(out_of_bounds(9, 1) == True)
    print(out_of_bounds(1, 0) == True)
    print(out_of_bounds(1, 9) == True)
    print(out_of_bounds(1, 1) == False)
    print(out_of_bounds(3, 7) == False)
