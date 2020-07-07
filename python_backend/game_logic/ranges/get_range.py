from game_logic.ranges.paths.get_paths import get_paths
from game_logic.ranges.jumps.get_jumps import get_jumps
from game_logic.printers.print_board import print_board


def get_range(id_dict, range_defs, board, sqr, color):
    """ """
    id_ = board[sqr]
    fen_id = id_[1].lower()
    name = id_dict[fen_id]
    def_ = range_defs[name]
    offsets = def_[color]['offsets']
    step_funcs = def_[color]['spans']
    paths = get_paths(step_funcs, board, sqr, color)
    jumps = get_jumps(offsets, board, sqr, color)
    paths.extend(jumps)
    return paths


if __name__ == "__main__":
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

    ranges = \
        {'BB1': [],
         'BB2': [],
         'BK1': [],
         'BN1': [],
         'BN2': [],
         'BQ1': [],
         'BR1': [],
         'BR2': [],
         'WB1': [],
         'WB2': [],
         'WB3': [],
         'WK1': [],
         'WN1': [],
         'WN2': [],
         'WQ1': [],
         'WR1': [],
         'WR2': [],
         'WR3': [],
         'WR4': []}

    id_defs = \
        {'b': 'Bishop',
         'k': 'King',
         'n': 'Knight',
         'p': 'Pawn',
         'q': 'Queen',
         'r': 'Rook'}

    range_defs = \
        {
            "Rook": {
                "W": {
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ],
                    "offsets": []
                },
                "B": {
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ],
                    "offsets": []
                }
            },

            "Bishop": {
                "W": {
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d",
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ],
                    "offsets": []
                },
                "B": {
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ],
                    "offsets": []
                }
            },

            "Queen": {
                "W": {
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr45d",
                        "step_1sqr90d",
                        "step_1sqr135d",
                        "step_1sqr180d",
                        "step_1sqr225d",
                        "step_1sqr270d",
                        "step_1sqr315d"
                    ],
                    "offsets": []
                },
                "B": {
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr225d",
                        "step_1sqr270d",
                        "step_1sqr315d",
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "offsets": []
            },

            "Knight": {
                "W": {
                    "spans": [],
                    "offsets": [
                        [1, 2],
                        [1, -2],
                        [-1, 2],
                        [-1, -2],
                        [2, 1],
                        [2, -1],
                        [-2, 1],
                        [-2, -1]]
                },
                "B": {
                    "spans": [],
                    "offsets": [
                        [-1, -2],
                        [-1, 2],
                        [1, -2],
                        [1, 2],
                        [-2, -1],
                        [-2, 1],
                        [2, -1],
                        [2, 1]]
                }
            }
        }

    piece_range = get_range(id_defs, range_defs, board, (3, 3), 'W')
    print_board(board, heading="c3", highlights=piece_range)
    piece_range = get_range(id_defs, range_defs, board, (4, 5), 'W')
    print_board(board, heading="d5", highlights=piece_range)

