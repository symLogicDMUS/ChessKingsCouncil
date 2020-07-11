from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.color.get_color import get_color


def is_promo(start, dest, id_):
    """return True if start and dest are potential alignment of a pawn promotion and id is a pawn, else false
        is_promo is not concerned doing any filtering that is the job of the range
    """
    if get_piece_type(id_) == 'P' and get_color(id_) == 'W' and start[1] == 7 and dest[1] == 8:
        return True
    elif get_piece_type(id_) == 'P' and get_color(id_) == 'B' and start[1] == 2 and dest[1] == 1:
        return True
    else:
        return False


if __name__ == "__main__":
    board = \
        {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB1', (7, 1): 'WN1',
         (8, 1): 'WR2',
         (1, 2): '#', (2, 2): '#', (3, 2): 'BP1', (4, 2): '#', (5, 2): '#', (6, 2): 'WP1', (7, 2): '#', (8, 2): 'WP2',
         (1, 3): 'WN2', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): 'WB2', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 4): 'WP3', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): 'WP4', (6, 4): '#', (7, 4): 'WP5', (8, 4): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): 'BP2', (6, 5): 'BP3', (7, 5): '#', (8, 5): 'BP4',
         (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): 'WP6', (3, 7): '#', (4, 7): 'BP5', (5, 7): '#', (6, 7): '#', (7, 7): 'BP6', (8, 7): '#',
         (1, 8): 'BR1', (2, 8): '#', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): 'BN2',
         (8, 8): 'BR2'}
    for y1 in range(8, 0, -1):
        for x1 in range(1, 9):
            id_ = board[x1, y1]
            for y2 in range(8, 0, -1):
                for x2 in range(1, 9):
                    if is_promo((x1, y1), (x2, y2), id_):
                        print("({}, {}),  ({}, {})".format(x1, y1, x2, y2))
