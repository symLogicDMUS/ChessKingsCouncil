from custom_except import *


def pawn_moved_once_2_sqrs(pawn_hist, color):
    """
    takes a pawn history as input and returns true if  history indicates a single 
    move 2 square jump
    """
    if color == 'W':  # + 2
        if len(pawn_hist) == 2 and pawn_hist[1][1] == pawn_hist[0][1] + 2 and pawn_hist[0][0] == pawn_hist[1][0]:
            return True
        else:
            return False
    elif color == 'B':  # - 2
        if len(pawn_hist) == 2 and pawn_hist[1][1] == pawn_hist[0][1] - 2 and pawn_hist[0][0] == pawn_hist[1][0]:
            return True
        else:
            return False
    else:
        print('error: incorrect color\n')
        return -1


if __name__ == "__main__":
    # test 1:
    print('test 1:')
    print(pawn_moved_once_2_sqrs([(2, 2), (2, 4)], 'W') == True)
    print('\n')

    # test 2:
    print('test 2:')
    print(pawn_moved_once_2_sqrs([(5, 2), (5, 3)], 'W') == False)
    print('\n')

    # test 3:
    print('test 3:')
    print(pawn_moved_once_2_sqrs([(5, 3)], 'W') == False)
    print('\n')

    # test 4:
    print('test 4:')
    print(pawn_moved_once_2_sqrs([], 'W') == False)
    print('\n')

    # test 5:
    print('test 5:')
    print(pawn_moved_once_2_sqrs([], 'B') == False)
    print('\n')

    # test 6:
    print('test 6:')
    print(pawn_moved_once_2_sqrs([(2, 2), (2, 4)], 'B') == False)
    print('\n')

    # test 7:
    print('test 7:')
    print(pawn_moved_once_2_sqrs([(3, 7), (3, 5)], 'B') == True)
    print('\n')

    # test 8:
    print('test 8:')
    print(pawn_moved_once_2_sqrs([(3, 7), (3, 5)], 'W') == False)
    print('\n')
