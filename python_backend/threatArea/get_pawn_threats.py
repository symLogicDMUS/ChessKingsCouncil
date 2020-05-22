
from threatArea.get_potential_pawn_threats import get_potential_pawn_threats
from threatArea.get_actual_pawn_threats import get_actual_pawn_threats


def get_pawn_threats(sqr, board, color):
    """return list of squares containing a pawn putting the king in check"""
    potential_pawn_threats = get_potential_pawn_threats(sqr, board, color)
    actual_pawn_threats = get_actual_pawn_threats(board, potential_pawn_threats, color)

    return actual_pawn_threats


if __name__ == "__main__":
    board = \
        {(1, 1): 'WR1', (2, 1): 'WN1', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): '#', (6, 1): 'WB2', (7, 1): 'WN2',
         (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): 'WK1', (7, 3): '#', (8, 3): '#',
         (1, 4): '#', (2, 4): 'WP1', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): 'BP1', (8, 4): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): 'BK1', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): 'BN1', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): '#', (6, 8): 'BB2', (7, 8): 'BN2',
         (8, 8): 'BR2'}

    # test 1:
    print('test 1:')
    print(get_pawn_threats((6, 3), board, 'W'))
    print('\n')

    # test 2:
    print('test 2:')
    print(get_pawn_threats((3, 5), board, 'B'))
