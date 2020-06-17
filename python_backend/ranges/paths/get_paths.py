import copy
from step_funcs.step_funcs import step_func_dict
from ranges.paths.get_path import get_path
from printers.print_board import print_board


def get_paths(func_names, board, sqr, color):
    """ """
    paths = []
    while len(func_names) > 0:
        step_func = step_func_dict[func_names.pop(0)]
        paths.extend(get_path(sqr, board, color, step_func))
    return paths


if __name__ == "__main__":
    step_funcs = \
        ["step_1sqr90d",
         "step_1sqr45d",
         "step_1sqr0d",
         "step_1sqr315d",
         "step_1sqr270d",
         "step_1sqr225d",
         "step_1sqr180d",
         "step_1sqr135d"]
    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'BK1', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BR1', (2, 5): 'BN1', (3, 5): 'BB1', (4, 5): 'BQ1', (5, 5): '#', (6, 5): 'BB2', (7, 5): 'BN2',
         (8, 5): 'BR2',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): 'WR3', (2, 3): 'WN1', (3, 3): 'WB2', (4, 3): 'WQ1', (5, 3): '#', (6, 3): 'WB3', (7, 3): 'WN2',
         (8, 3): 'WR4',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): '#', (2, 1): 'WR1', (3, 1): 'WB1', (4, 1): 'WR2', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): '#'}

    paths = get_paths(copy.deepcopy(step_funcs), board, (4, 3), 'W')
    print_board(board, highlights=paths)

    paths = get_paths(step_funcs, board, (4, 5), 'B')
    print_board(board, highlights=paths)
