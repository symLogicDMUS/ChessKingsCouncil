from custom_except import *
from getters.get_threat_area import get_threat_area
from threatArea.get_king_threats import get_king_threats


def sqr_under_attack(sqr, board, color):
    """return True if square is under attack, else False """
    threat_area = get_threat_area(sqr, board, color)
    king_threats = get_king_threats(sqr, board, color)
    threat_area = threat_area + king_threats
    if len(threat_area) > 0:
        return True
    else:
        return False


if __name__ == "__main__":

    print()
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'WQ1', (5, 6): 'BQ1', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): 'WR1', (4, 5): 'BB1', (5, 5): 'WB1', (6, 5): 'BR1', (7, 5): '#', (8, 5): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'WN1', (5, 4): 'BN1', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): 'BK1', (5, 3): 'WK1', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): '#', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): '#', (7, 1): '#', (8, 1): '#'}

    # test 1, under attack by white 'W':
    print('test 1:')
    results = {}
    for y in range(1, 9):
        for x in range(1, 9):
            results[(x, y)] = sqr_under_attack((x, y), board, 'W')
    for y in range(8, 0, -1):
        for x in range(1, 9):
            if results[(x, y)]:
                print('T', end=' ')
            else:
                print('F', end=' ')
            if x % 8 == 0:
                print('')  # use python's built in '\n'
    print('\n')

    # test 2, under attack by black 'B':
    print('test 2:')
    results = {}
    for y in range(1, 9):
        for x in range(1, 9):
            results[(x, y)] = sqr_under_attack((x, y), board, 'B')
    for y in range(8, 0, -1):
        for x in range(1, 9):
            if results[(x, y)]:
                print('T', end=' ')
            else:
                print('F', end=' ')
            if x % 8 == 0:
                print('')  # use python's built in '\n'
    print('\n')
