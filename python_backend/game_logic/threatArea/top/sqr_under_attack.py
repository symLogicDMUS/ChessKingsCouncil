from game_logic.threatArea.top.get_threat_area import get_threat_area
from game_logic.threatArea.get_king_threats import get_king_threats
from game_logic.printers.print_board import print_board
from itertools import filterfalse


def sqr_under_attack(board, sqr, color, range_defs, id_dict):
    """return True if square is under attack, else False """
    threat_area = get_threat_area(board, sqr, color, range_defs, id_dict)
    king_threats = get_king_threats(board, sqr, color)
    threat_area = threat_area + king_threats
    if len(threat_area) > 0:
        return True
    else:
        return False


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

    board = \
        {(1, 8): '#', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): '#', (6, 8): '#', (7, 8): '#', (8, 8): '#',
         (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#',
         (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): 'WQ1', (5, 6): 'BQ1', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): '#', (2, 5): '#', (3, 5): 'WR1', (4, 5): 'BB1', (5, 5): 'WB1', (6, 5): 'BR1', (7, 5): '#', (8, 5): '#',
         (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'WN1', (5, 4): 'BN1', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): 'BK1', (5, 3): 'WK1', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#',
         (1, 1): '#', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): '#', (6, 1): '#', (7, 1): '#', (8, 1): '#'}

    results = {}
    for y in range(1, 9):
        for x in range(1, 9):
            results[(x, y)] = sqr_under_attack(board, (x, y), 'W', range_defs, id_dict)
    under_attack = list(filter(lambda sqr: results[sqr], results.keys()))
    not_under_attack = list(filterfalse(lambda sqr: results[sqr], results.keys()))
    print_board(board, heading="test 1, under attack by W:", highlights=under_attack, highlights3=not_under_attack)

    print()
    results = {}
    for y in range(1, 9):
        for x in range(1, 9):
            results[(x, y)] = sqr_under_attack(board, (x, y), 'B', range_defs, id_dict)
    under_attack = list(filter(lambda sqr: results[sqr], results.keys()))
    not_under_attack = list(filterfalse(lambda sqr: results[sqr], results.keys()))
    print_board(board, heading='test 2, under attack by black B:', highlights=under_attack, highlights3=not_under_attack)
