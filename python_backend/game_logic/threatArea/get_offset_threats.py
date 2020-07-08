from game_logic.printers.print_board import print_board
from game_logic.color.get_piece_color import get_piece_color
from game_logic.color.get_next_color import get_next_color as get_enemy_color


def get_offset_threats(board, sqr, color, range_defs, id_dict):
    """ """
    board_filter1 = {}
    for sqr_ in board.keys():
        if board[sqr_] != '#':
            board_filter1[sqr_] = board[sqr_]
    board_filter2 = {}
    for sqr_ in board_filter1.keys():
        if get_piece_color(board_filter1[sqr_]) != color:
            board_filter2[sqr_] = board_filter1[sqr_]
    board_filter3 = {}
    for sqr_ in board_filter2.keys():
        id_ = board[sqr_]
        piece_name = id_dict[id_[1].lower()]
        if piece_name != "King" and piece_name != "Pawn":
            offset = [(sqr_[0] - sqr[0]) * -1, (sqr_[1] - sqr[1]) * -1]
            if offset in range_defs[piece_name][get_enemy_color(color)]["offsets"]:
                board_filter3[sqr_] = board_filter2[sqr_]
    return list(board_filter3.keys())


if __name__ == "__main__":
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

    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2',
     (1, 2): 'WP1', (2, 2): '#', (3, 2): 'BN1', (4, 2): '#', (5, 2): 'WQ1', (6, 2): 'WP2', (7, 2): 'WN1', (8, 2): 'WP3',
     (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): 'WN2', (5, 3): 'WB1', (6, 3): 'BN2', (7, 3): '#', (8, 3): '#',
     (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): 'WP4', (6, 4): '#', (7, 4): '#', (8, 4): '#',
     (1, 5): 'BP1', (2, 5): 'WP5', (3, 5): '#', (4, 5): 'BP2', (5, 5): 'BP3', (6, 5): '#', (7, 5): '#', (8, 5): '#',
     (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN3', (7, 6): '#', (8, 6): 'WN3',
     (1, 7): '#', (2, 7): 'BP4', (3, 7): 'BP5', (4, 7): '#', (5, 7): 'WN4', (6, 7): 'BP6', (7, 7): 'BP7', (8, 7): 'BP8',
     (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): 'BR2', (7, 8): 'BK1', (8, 8): '#'}

    print_board(board, heading="knight_threat2, W", highlights=get_offset_threats(board, (5, 1), "W", range_defs, id_dict))
    print("")
    print_board(board, heading="knight_threat2, B", highlights=get_offset_threats(board, (7, 8), "B", range_defs, id_dict))