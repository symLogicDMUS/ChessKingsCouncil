from custom_except import *

class kingsMoved:
    def __init__(self):
        """The starting positions of the Kings, and if they moved"""
        self.kings_moved = {(5, 1):False, (5, 8):False}


if __name__ == "__main__":

    k = kingsMoved()

    #test 1:
    print('test 1:')
    print(k.has_moved((5, 1)))

    #test 2:
    print('test 2:')
    print(k.has_moved((5, 8)))

