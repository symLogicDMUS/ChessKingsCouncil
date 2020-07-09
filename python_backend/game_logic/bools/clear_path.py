from game_logic.test_objects.sample_board_dicts import sample_board_dicts
from game_logic.piece_type.is_piece import is_piece
from itertools import product


def clear_path(board, path):
    """return true if every square along the path is empty, else false"""

    for sqr in path:
        if is_piece(board[sqr]):
            break
    else:
        return True

    return False


if __name__ == "__main__":
    # test 1:

    print('test 1:')
    board = sample_board_dicts['check_example3']

    for x in range(1, 9):
        print(clear_path(board, list(product([1, 2, 3, 4, 5, 6, 7, 8], [x]))))

    print('\n')

    # test 2:

    print('test 2:')

    board = \
        {(1, 1): '#', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): '#', (7, 1): '#', (8, 1): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): 'BK1', (5, 3): 'WK1', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'WN1', (5, 4): 'BN1', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): 'WR1', (4, 5): 'BB1', (5, 5): 'WB1', (6, 5): 'BR1', (7, 5): '#', (8, 5): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'WQ1', (5, 6): 'BQ1', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#'}

    for x in range(1, 9):
        print(clear_path(board, list(product([1, 2, 3, 4, 5, 6, 7, 8], [x]))))

    print('\n')
