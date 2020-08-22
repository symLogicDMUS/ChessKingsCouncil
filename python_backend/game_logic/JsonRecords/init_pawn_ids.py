from pprint import pprint
from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.JsonRecords.JsonRecordError import JsonRecordError


def init_pawn_ids(records, board):
    """exchange the sqr that pawn started the game with, with the id for that pawn"""
    pawn_histories = {}
    for hist in records['pawn_histories'].values():
        sqr = hist[-1]
        id_ = board[sqr]
        pawn_histories[id_] = hist
        if get_piece_type(id_) != 'P':
            print("ERROR: there is no pawn at {}".format(sqr))
            raise JsonRecordError
    records['pawn_histories'] = pawn_histories
    return records


if __name__ == "__main__":
    records = {
        "rooks_moved": {
            (1, 1): False,
            (8, 1): False,
            (1, 8): False,
            (8, 8): False
        },
        "kings_moved": {
            (5, 1): False,
            (5, 8): False
        },
        "pawn_histories": {
            (1, 4): [(1, 2), (1, 4)],
            (2, 4): [(2, 2), (2, 4)],
            (3, 4): [(3, 2), (3, 4)],
            (4, 4): [(4, 2), (4, 4)],
            (5, 4): [(5, 2), (5, 4)],
            (6, 4): [(6, 2), (6, 4)],
            (7, 4): [(7, 2), (7, 4)],
            (8, 4): [(8, 2), (8, 4)],
            (1, 5): [(1, 7), (1, 5)],
            (2, 5): [(2, 7), (2, 5)],
            (3, 5): [(3, 7), (3, 5)],
            (4, 5): [(4, 7), (4, 5)],
            (5, 5): [(5, 7), (5, 5)],
            (6, 5): [(6, 7), (6, 5)],
            (7, 5): [(7, 7), (7, 5)],
            (6, 5): [(6, 7), (6, 5)]
        },
        "last_pawn_move": "None",
        "num_consecutive_non_pawn_moves": 0
    }
    board = \
        {(1, 1): 'WR1', (2, 1): 'WN1', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB2', (7, 1): 'WN2',
         (8, 1): 'WR2', (1, 2): '#', (2, 2): '#', (3, 2): '#', (4, 2): '#', (5, 2): '#', (6, 2): '#', (7, 2): '#',
         (8, 2): '#', (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#',
         (8, 3): '#', (1, 4): 'WP1', (2, 4): 'WP2', (3, 4): 'WP3', (4, 4): 'WP4', (5, 4): 'WP5', (6, 4): 'WP6',
         (7, 4): 'WP7', (8, 4): 'WP8', (1, 5): 'BP1', (2, 5): 'BP2', (3, 5): 'BP3', (4, 5): 'BP4', (5, 5): 'BP5',
         (6, 5): 'BP6', (7, 5): 'BP7', (8, 5): 'BP8', (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#',
         (6, 6): '#', (7, 6): '#', (8, 6): '#', (1, 7): '#', (2, 7): '#', (3, 7): '#', (4, 7): '#', (5, 7): '#',
         (6, 7): '#', (7, 7): '#', (8, 7): '#', (1, 8): 'BR1', (2, 8): 'BN1', (3, 8): 'BB1', (4, 8): 'BQ1',
         (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): 'BN2', (8, 8): 'BR2'}
    pprint(init_pawn_ids(records, board))
