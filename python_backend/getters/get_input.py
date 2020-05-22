from custom_except import *
from coordType.to_xy import to_xy


def get_input(turn=""):
    """start rankfiles for start and ending locations from user, and convert to (x, y)"""
    if turn != "":
        print("turn: {}".format(turn))
    start = input("from:")
    dest = input("to:")
    return start, dest


if __name__ == "__main__":
    pass #TODO: implement test