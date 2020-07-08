from game_logic.threatArea.top.sqr_under_attack import sqr_under_attack
from game_logic.ranges.king.get_king_initial_moves import get_king_initial_moves
from game_logic.getters.get_temp_boards import get_temp_boards
from game_logic.fenParser.getBoard.top.get_board import get_board
from game_logic.printers.print_board import print_board
from game_logic.threatArea.get_king_loc import get_king_loc
from termcolor import colored


def get_king_actual_moves(board, king_loc, init_range, color, range_defs, id_dict):
    """filter the king's initial moves to get the actual ones"""
    boards = get_temp_boards(board, king_loc, init_range, color)
    return list(filter(lambda sqr: not sqr_under_attack(board, sqr, color, range_defs, id_dict), boards.keys()))


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

    f = open("../../../saved_games/dummy_game/dummy_game.fen")
    print(colored("dummy_game", 'red'))
    fen = f.readline()
    board = get_board(fen)
    # W:
    king_loc = get_king_loc(board, 'W')
    init_range = get_king_initial_moves(board, king_loc, 'W')
    final_range = get_king_actual_moves(board, king_loc, init_range, 'W', range_defs, id_dict)
    print_board(board, heading='W', highlights=final_range)
    # B:
    king_loc = get_king_loc(board, 'B')
    init_range = get_king_initial_moves(board, king_loc, 'B')
    final_range = get_king_actual_moves(board, king_loc, init_range, 'B', range_defs, id_dict)
    print_board(board, heading='W', highlights=final_range)
