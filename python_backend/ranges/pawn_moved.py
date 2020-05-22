from custom_except import *
def pawn_moved(pawn_hist):
    """takes a pawn history as input, returns true if that pawn has moved else returns false"""
    if len(pawn_hist) > 1:
        return True
    else:
        return False


if __name__ == "__main__":
    # test 1:
    print('test 1:')
    print(pawn_moved([(3, 2)]))

    # test 2:
    print('test 2:')
    print(pawn_moved([(3, 2), (3, 4)]))
