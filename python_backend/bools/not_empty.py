from custom_except import *

def not_empty(list_):
    """returns true if the list contains at least 1 element, otherwise false"""
    if len(list_) > 0:
        return True
    else:
        return False


if __name__ == "__main__":
    print(not_empty(['f']))
    print(not_empty([]))


