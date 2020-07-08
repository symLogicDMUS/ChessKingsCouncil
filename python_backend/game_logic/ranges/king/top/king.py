from game_logic.ranges.specialMoves.castle.can_king_side_castle import can_king_side_castle
from game_logic.ranges.specialMoves.castle.can_queen_side_castle import can_queen_side_castle
from game_logic.ranges.king.get_king_initial_moves import get_king_initial_moves
from game_logic.ranges.king.get_king_actual_moves import get_king_actual_moves
from game_logic.ranges.specialMoves.castle.get_castle_target_square import get_castle_target_square
from game_logic.ranges.specialMoves.SpecialMoves import SpecialMoves
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.printers.print_board import print_board


def king(board, sqr, color, json_records, special_moves, range_defs, id_dict):
    """get the range of king at location sqr on board of given color

    psudocode
    ---------
    get initial moves
    filter initial moves to get actual moves
    if can_king_side_castle...
        ..get_king_side_castle
    if can_queen_side_castle...
        ..get_queen_side_castle
    """
    k_range = get_king_initial_moves(board, sqr, color)
    if can_king_side_castle(board, color, json_records, range_defs, id_dict):
        t_sqr = get_castle_target_square(color, 'K')
        k_range.append(t_sqr)
        special_moves.add_castle((sqr, t_sqr))
    if can_queen_side_castle(board, color, json_records, range_defs, id_dict):
        t_sqr = get_castle_target_square(color, 'Q')
        k_range.append(t_sqr)
        special_moves.add_castle((sqr, t_sqr))
    k_range = get_king_actual_moves(board, sqr, k_range, color, range_defs, id_dict)
    return k_range, special_moves


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

    special_moves = SpecialMoves()

    # test castle_test1, W:
    print('test 1, W:')
    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2', 
     (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
     (1, 3): 'WN1', (2, 3): 'WB1', (3, 3): 'WQ1', (4, 3): 'BB1', (5, 3): '#', (6, 3): 'BQ1', (7, 3): '#', (8, 3): '#', 
     (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'BB2', (5, 4): '#', (6, 4): 'WB2', (7, 4): 'BP1', (8, 4): 'WP1', 
     (1, 5): 'BP2', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): 'BN1', (6, 5): '#', (7, 5): '#', (8, 5): 'BP3', 
     (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WP2', (7, 6): '#', (8, 6): '#', 
     (1, 7): '#', (2, 7): 'WP3', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#', 
     (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    json_records = JsonRecords("../../../../example_games/castle_test1/castle_test1.json", board)

    k_range, special_moves = king(board, (5, 1), 'W', json_records, special_moves, range_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    # test castle_test2, W:
    print('test 2, W:')
    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2', 
     (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
     (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#', 
     (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#', 
     (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#', 
     (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#', 
     (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#', 
     (1, 8): '#', (2, 8): 'BQ1', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): '#'}

    json_records = JsonRecords("../../../../example_games/castle_test2/castle_test2.json", board)

    k_range, special_moves = king(board, (5, 1), 'W', json_records, special_moves, range_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    # test castle_test3, W:
    print('test 3, W:')
    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2', 
     (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): 'WQ1', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
     (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WB1', (5, 3): 'WB2', (6, 3): 'WN2', (7, 3): '#', (8, 3): '#', 
     (1, 4): 'WP1', (2, 4): 'WP2', (3, 4): 'WP3', (4, 4): 'WP4', (5, 4): 'WP5', (6, 4): 'WP6', (7, 4): 'WP7', (8, 4): 'WP8', 
     (1, 5): 'BP1', (2, 5): 'BP2', (3, 5): 'BP3', (4, 5): 'BP4', (5, 5): 'BP5', (6, 5): 'BP6', (7, 5): 'BP7', (8, 5): 'BP8', 
     (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN2', (7, 6): '#', (8, 6): '#', 
     (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BQ1', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#', 
     (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    json_records = JsonRecords("../../../../example_games/castle_test3/castle_test3.json", board)

    k_range, special_moves = king(board, (5, 1), 'W', json_records, special_moves, range_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    # test castle_test4, W:
    print('test 4, W:')
    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2', 
     (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
     (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WB1', (5, 3): 'WB2', (6, 3): 'WN2', (7, 3): '#', (8, 3): '#', 
     (1, 4): 'WP1', (2, 4): 'WP2', (3, 4): 'WP3', (4, 4): 'WP4', (5, 4): 'WP5', (6, 4): 'WP6', (7, 4): 'WP7', (8, 4): 'WP8', 
     (1, 5): 'BP1', (2, 5): 'BP2', (3, 5): 'BP3', (4, 5): 'BP4', (5, 5): 'BP5', (6, 5): 'BP6', (7, 5): 'BP7', (8, 5): 'BP8', 
     (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN2', (7, 6): '#', (8, 6): '#', 
     (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#', 
     (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    json_records = JsonRecords("../../../../example_games/castle_test4/castle_test4.json", board)

    k_range, special_moves = king(board, (5, 1), 'W', json_records, special_moves, range_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    # test castle_test1, B:
    print('test 1, B:')
    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2', 
     (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
     (1, 3): 'WN1', (2, 3): 'WB1', (3, 3): 'WQ1', (4, 3): 'BB1', (5, 3): '#', (6, 3): 'BQ1', (7, 3): '#', (8, 3): '#', 
     (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): 'BB2', (5, 4): '#', (6, 4): 'WB2', (7, 4): 'BP1', (8, 4): 'WP1', 
     (1, 5): 'BP2', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): 'BN1', (6, 5): '#', (7, 5): '#', (8, 5): 'BP3', 
     (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'WP2', (7, 6): '#', (8, 6): '#', 
     (1, 7): '#', (2, 7): 'WP3', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#', 
     (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    json_records = JsonRecords("../../../../example_games/castle_test1/castle_test1.json", board)

    k_range, special_moves = king(board, (5, 8), 'B', json_records, special_moves, range_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    # test castle_test2, B:
    print('test 2, B:')
    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2', 
     (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
     (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#', 
     (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#', 
     (1, 5): '#', (2, 5): '#', (3, 5): '#', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#', 
     (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#', 
     (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#', 
     (1, 8): '#', (2, 8): 'BQ1', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): '#'}

    json_records = JsonRecords("../../../../example_games/castle_test2/castle_test2.json", board)

    k_range, special_moves = king(board, (5, 8), 'B', json_records, special_moves, range_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    # test castle_test3, B:
    print('test 3, B:')
    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): '#', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2', 
     (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): 'WQ1', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
     (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WB1', (5, 3): 'WB2', (6, 3): 'WN2', (7, 3): '#', (8, 3): '#', 
     (1, 4): 'WP1', (2, 4): 'WP2', (3, 4): 'WP3', (4, 4): 'WP4', (5, 4): 'WP5', (6, 4): 'WP6', (7, 4): 'WP7', (8, 4): 'WP8', 
     (1, 5): 'BP1', (2, 5): 'BP2', (3, 5): 'BP3', (4, 5): 'BP4', (5, 5): 'BP5', (6, 5): 'BP6', (7, 5): 'BP7', (8, 5): 'BP8', 
     (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN2', (7, 6): '#', (8, 6): '#', 
     (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): 'BQ1', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#', 
     (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): '#', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    json_records = JsonRecords("../../../../example_games/castle_test3/castle_test3.json", board)

    k_range, special_moves = king(board, (5, 8), 'B', json_records, special_moves, range_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')

    # test castle_test4, B:
    print('test 4, B:')
    board =\
    {(1, 1): 'WR1', (2, 1): '#', (3, 1): '#', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): '#', (7, 1): '#', (8, 1): 'WR2', 
     (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#', (8, 2): '#', 
     (1, 3): '#', (2, 3): '#', (3, 3): 'WN1', (4, 3): 'WB1', (5, 3): 'WB2', (6, 3): 'WN2', (7, 3): '#', (8, 3): '#', 
     (1, 4): 'WP1', (2, 4): 'WP2', (3, 4): 'WP3', (4, 4): 'WP4', (5, 4): 'WP5', (6, 4): 'WP6', (7, 4): 'WP7', (8, 4): 'WP8', 
     (1, 5): 'BP1', (2, 5): 'BP2', (3, 5): 'BP3', (4, 5): 'BP4', (5, 5): 'BP5', (6, 5): 'BP6', (7, 5): 'BP7', (8, 5): 'BP8', 
     (1, 6): '#', (2, 6): '#', (3, 6): 'BN1', (4, 6): 'BB1', (5, 6): 'BB2', (6, 6): 'BN2', (7, 6): '#', (8, 6): '#', 
     (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#', (6, 7): '#', (7, 7): '#', (8, 7): '#', 
     (1, 8): 'BR1', (2, 8): '#', (3, 8): '#', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): '#', (7, 8): '#', (8, 8): 'BR2'}

    json_records = JsonRecords("../../../../example_games/castle_test4/castle_test4.json", board)

    k_range, special_moves = king(board, (5, 8), 'B', json_records, special_moves, range_defs, id_dict)
    print_board(board, highlights=k_range)
    print('\n')
