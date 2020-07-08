from game_logic.pathsInfo.get_coord_path import _get_coord_path
from game_logic.pathsInfo.get_path import _get_path
from game_logic.pathsInfo.get_pieces_on_path import _get_pieces_on_path
from game_logic.pathsInfo.get_statuses import _get_statuses
from game_logic.pathsInfo.get_piece_matches_path import _get_piece_matches_path
from game_logic.step_funcs.step_funcs import *
from game_logic.printers.print_board import print_board


def _get_path_data(board, sqr, color, range_defs, id_dict, step_func):
    """get all info about a path on board determined by step function stemming from sqr"""
    x, y = sqr[0], sqr[1]
    coord_path = _get_coord_path(x, y, step_func)
    path = _get_path(board, x, y, step_func)
    piece_ids = _get_pieces_on_path(board, x, y, step_func)
    statuses = _get_statuses(piece_ids, color)
    piece_matches_path = []
    for piece_id in piece_ids:
        id_ = piece_id[1].lower()
        piece_name = id_dict[id_]
        piece_matches_path.append(_get_piece_matches_path(step_func, range_defs, piece_name, color))
    return [coord_path, path, piece_ids, statuses, piece_matches_path]


if __name__ == "__main__":
    board = \
        {(1, 1): 'BB1', (1, 2): '#', (1, 3): '#', (1, 4): 'BQ3', (1, 5): '#', (1, 6): '#', (1, 7): 'BQ4', (1, 8): '#',
         (2, 1): '#', (2, 2): '#', (2, 3): '#', (2, 4): '#', (2, 5): '#', (2, 6): '#', (2, 7): '#', (2, 8): '#',
         (3, 1): '#', (3, 2): '#', (3, 3): 'WN1', (3, 4): 'WQ1', (3, 5): '#', (3, 6): '#', (3, 7): '#', (3, 8): '#',
         (4, 1): 'BQ1', (4, 2): 'WR1', (4, 3): 'WP1', (4, 4): 'WK1', (4, 5): '#', (4, 6): 'WP2', (4, 7): 'BR2',
         (4, 8): 'BK1',
         (5, 1): '#', (5, 2): '#', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): '#', (5, 8): '#',
         (6, 1): '#', (6, 2): 'WR2', (6, 3): '#', (6, 4): 'WQ2', (6, 5): '#', (6, 6): 'WP3', (6, 7): '#', (6, 8): '#',
         (7, 1): 'BQ2', (7, 2): '#', (7, 3): '#', (7, 4): 'WB1', (7, 5): '#', (7, 6): '#', (7, 7): 'WP4', (7, 8): '#',
         (8, 1): '#', (8, 2): '#', (8, 3): '#', (8, 4): 'BR1', (8, 5): '#', (8, 6): '#', (8, 7): '#', (8, 8): 'BB2'}

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

    # test 1, 90:
    print("test 1:")
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', range_defs, id_dict, step_1sqr90d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 2, 45:
    print('test 2:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', range_defs, id_dict, step_1sqr45d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 3, 0:
    print('test 3:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', range_defs, id_dict, step_1sqr0d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 4, 315:
    print('test 4:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', range_defs, id_dict, step_1sqr315d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 5, 270:
    print('test 5:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', range_defs, id_dict, step_1sqr270d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 6, 225:
    print('test 6:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', range_defs, id_dict, step_1sqr225d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 7, 180:
    print('test 7:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', range_defs, id_dict, step_1sqr180d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')

    # test 8, 135:
    print('test 8:')
    coord_path, path, pieces, statuses, piece_matches_path = _get_path_data(board, (4, 4), 'W', range_defs, id_dict, step_1sqr135d)
    print_board(board, heading="coord_path:{} path:{} pieces:{} statuses:{} piece_matches_path:{}".format(coord_path,
                                                                                                          path,
                                                                                                          pieces,
                                                                                                          statuses,
                                                                                                          piece_matches_path),
                                                                                                          highlights=coord_path,
                                                                                                          highlights3=[(4, 4)])
    print('')
