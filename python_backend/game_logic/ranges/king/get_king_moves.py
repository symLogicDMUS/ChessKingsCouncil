from game_logic.sqr_case.get_sqr_case import get_sqr_case
from game_logic.threatArea.top.sqr_under_attack import sqr_under_attack
from game_logic.helpers.formulas import dist
from game_logic.sqr_case.sqr_cases import *
from game_logic.printers.print_board import print_board
from math import sqrt


def get_king_moves(board, sqr, color, range_defs, id_dict):
    """get every 1 king distance away that is not out of bounds or a friendly piece"""
    king_moves = list(filter(lambda sqr2: dist(sqr, sqr2) == sqrt(2) or dist(sqr, sqr2) == 1, board.keys()))
    king_moves = list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) != OOB, king_moves))
    king_moves = list(filter(lambda sqr: get_sqr_case(board, sqr[0], sqr[1], color) != FRIEND, king_moves))
    king_moves = list(filter(lambda sqr: not sqr_under_attack(board, sqr, color, range_defs, id_dict), king_moves))
    return king_moves


if __name__ == "__main__":
    board =\
    {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): '#',
    (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): 'BP2', (8, 7): 'BP3', 
    (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#', 
    (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#', 
    (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'WP1', (5, 4): 'BP1', (6, 4): '#', (7, 4): '#', (8, 4): '#', 
    (1, 3): '#', (2, 3): '#', (3, 3): 'BB1', (4, 3): 'WK1', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#', 
    (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): 'WB1', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
    (1, 1): '#', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): '#', (7, 1): '#', (8, 1): '#'}

    range_defs = \
        {
            "Bishop": {
                "B": {
                    "img": "BB.svg",
                    "offsets": [],
                    "spans": [
                        "step_1sqr225d",
                        "step_1sqr315d",
                        "step_1sqr45d",
                        "step_1sqr135d"
                    ]
                },
                "W": {
                    "img": "WB.svg",
                    "offsets": [],
                    "spans": [
                        "step_1sqr45d",
                        "step_1sqr135d",
                        "step_1sqr225d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Knight": {
                "B": {
                    "img": "BN.svg",
                    "offsets": [
                        [
                            -1,
                            -2
                        ],
                        [
                            -1,
                            2
                        ],
                        [
                            1,
                            -2
                        ],
                        [
                            1,
                            2
                        ],
                        [
                            -2,
                            -1
                        ],
                        [
                            -2,
                            1
                        ],
                        [
                            2,
                            -1
                        ],
                        [
                            2,
                            1
                        ]
                    ],
                    "spans": []
                },
                "W": {
                    "img": "WN.svg",
                    "offsets": [
                        [
                            1,
                            2
                        ],
                        [
                            1,
                            -2
                        ],
                        [
                            -1,
                            2
                        ],
                        [
                            -1,
                            -2
                        ],
                        [
                            2,
                            1
                        ],
                        [
                            2,
                            -1
                        ],
                        [
                            -2,
                            1
                        ],
                        [
                            -2,
                            -1
                        ]
                    ],
                    "spans": []
                }
            },
            "Queen": {
                "B": {
                    "img": "BQ.svg",
                    "offsets": [],
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
                "W": {
                    "img": "WQ.svg",
                    "offsets": [],
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr45d",
                        "step_1sqr90d",
                        "step_1sqr135d",
                        "step_1sqr180d",
                        "step_1sqr225d",
                        "step_1sqr270d",
                        "step_1sqr315d"
                    ]
                }
            },
            "Rook": {
                "B": {
                    "img": "BR.svg",
                    "offsets": [],
                    "spans": [
                        "step_1sqr180d",
                        "step_1sqr270d",
                        "step_1sqr0d",
                        "step_1sqr90d"
                    ]
                },
                "W": {
                    "img": "WR.svg",
                    "offsets": [],
                    "spans": [
                        "step_1sqr0d",
                        "step_1sqr90d",
                        "step_1sqr180d",
                        "step_1sqr270d"
                    ]
                }
            }
        }
    id_dict = \
        {
            "k": "King",
            "q": "Queen",
            "r": "Rook",
            "b": "Bishop",
            "n": "Knight",
            "p": "Pawn"
        }

    king_moves = get_king_moves(board, (4, 3), 'W', range_defs, id_dict)
    print_board(board, heading="test 1, white", highlights=king_moves)

    king_moves = get_king_moves(board, (5, 8), 'B', range_defs, id_dict)
    print_board(board, heading='test 2, black', highlights=king_moves)