from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.ranges.specialMoves.enPassant.pawn_2_sqr_first_moves import pawn_2_sqr_first_moves


def pawn_moved_once_2_sqrs(pawn_histories, id):
    if pawn_histories[id] in pawn_2_sqr_first_moves:
        return True
    else:
        return False


if __name__ == "__main__":

    # test 1:
    print('test 1:')
    board = \
        {(1, 8): 'BR1', (2, 8): '#', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): 'BN2',
         (8, 8): 'BR2',
         (1, 7): 'BP5', (2, 7): '#', (3, 7): 'BP6', (4, 7): '#', (5, 7): '#', (6, 7): 'BP7', (7, 7): 'BP8', (8, 7): '#',
         (1, 6): '#', (2, 6): 'BP4', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BN1', (2, 5): '#', (3, 5): '#', (4, 5): 'BP1', (5, 5): 'BP2', (6, 5): '#', (7, 5): 'WP8',
         (8, 5): 'BP3',
         (1, 4): '#', (2, 4): 'WP5', (3, 4): 'WP6', (4, 4): '#', (5, 4): 'WP7', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): 'WN2', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): 'WP1', (2, 2): '#', (3, 2): '#', (4, 2): 'WP2', (5, 2): '#', (6, 2): 'WP3', (7, 2): '#', (8, 2): 'WP4',
         (1, 1): 'WR1', (2, 1): '#', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB2', (7, 1): 'WN1',
         (8, 1): 'WR2'}

    json_records = JsonRecords(
        "C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/pawn_range/pawn_range.json", board)

    for id in board.values():
        if id == '#':
            continue
        if get_piece_type(id) == 'Pawn':
            print("id:{} moved once, 2 squares:{}".format(id, pawn_moved_once_2_sqrs(json_records.pawn_histories, id)))
    print('\n')

    # test 2:
    print('test 2:')
    board = \
        {(1, 1): 'WR1', (1, 2): 'WP1', (1, 3): '#', (1, 4): '#', (1, 5): '#', (1, 6): '#', (1, 7): 'BP1', (1, 8): 'BR1',
         (2, 1): 'WN1', (2, 2): 'WP2', (2, 3): '#', (2, 4): '#', (2, 5): '#', (2, 6): '#', (2, 7): 'BP2', (2, 8): 'BN1',
         (3, 1): 'WB1', (3, 2): 'WP3', (3, 3): '#', (3, 4): '#', (3, 5): '#', (3, 6): '#', (3, 7): 'BP3', (3, 8): 'BB1',
         (4, 1): 'WQ1', (4, 2): 'WP4', (4, 3): '#', (4, 4): '#', (4, 5): '#', (4, 6): '#', (4, 7): 'BP4', (4, 8): 'BQ1',
         (5, 1): 'WK1', (5, 2): 'WP5', (5, 3): '#', (5, 4): '#', (5, 5): '#', (5, 6): '#', (5, 7): 'BP5', (5, 8): 'BK1',
         (6, 1): 'WB2', (6, 2): 'WP6', (6, 3): '#', (6, 4): '#', (6, 5): '#', (6, 6): '#', (6, 7): 'BP6', (6, 8): 'BB2',
         (7, 1): 'WN2', (7, 2): 'WP7', (7, 3): '#', (7, 4): '#', (7, 5): '#', (7, 6): '#', (7, 7): 'BP7', (7, 8): 'BN2',
         (8, 1): 'WR2', (8, 2): 'WP8', (8, 3): '#', (8, 4): '#', (8, 5): '#', (8, 6): '#', (8, 7): 'BP8', (8, 8): 'BR2'}

    json_records = JsonRecords(
        "C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/_initialBoard/dummy_game.json", board)

    for id in board.values():
        if id == '#':
            continue
        if get_piece_type(id) == 'Pawn':
            print("id:{} moved once, 2 squares:{}".format(id, pawn_moved_once_2_sqrs(json_records.pawn_histories, id)))
    print('\n')
