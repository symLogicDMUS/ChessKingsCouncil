from game_logic.ranges.specialMoves.castle.get_queen_side_castle_paths import get_queen_side_castle_paths
from game_logic.ranges.specialMoves.castle.king_start_pos import king_start_pos
from game_logic.printers.print_fen_board import print_fen_board
from game_logic.threatArea.top.sqr_under_attack import sqr_under_attack
from game_logic.ranges.specialMoves.castle.safe_path import safe_path
from game_logic.bools.clear_path import clear_path
from game_logic.JsonRecords import JsonRecords


def can_queen_side_castle(board, color, json_records):
    """return true if the queen side castle of the given color can be performed, else false"""

    if json_records.has_king_moved(color):
        return False

    if json_records.queen_side_rook_moved(color):
        return False

    castle_path = get_queen_side_castle_paths(color)

    if not clear_path(board, castle_path):
        return False

    if not safe_path(board, castle_path, color):
        return False

    if sqr_under_attack(king_start_pos[color], board, color):
        return False

    return True

if __name__ == "__main__":

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

    json_records = JsonRecords("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/castle_test1/castle_test1.json", board)
    

    print_fen_board(board)
    print(can_queen_side_castle(board, 'W', json_records))
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

    json_records = JsonRecords("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/castle_test2/castle_test2.json", board)
    


    print_fen_board(board)
    print(can_queen_side_castle(board, 'W', json_records))
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

    json_records = JsonRecords("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/castle_test3/castle_test3.json", board)
    


    print_fen_board(board)
    print(can_queen_side_castle(board, 'W', json_records))
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

    json_records = JsonRecords("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/castle_test4/castle_test4.json", board)
    


    print_fen_board(board)
    print(can_queen_side_castle(board, 'W', json_records))
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

    json_records = JsonRecords("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/castle_test1/castle_test1.json", board)
    

    print_fen_board(board)
    print(can_queen_side_castle(board, 'B', json_records))
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

    json_records = JsonRecords("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/castle_test2/castle_test2.json", board)
    


    print_fen_board(board)
    print(can_queen_side_castle(board, 'B', json_records))
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

    json_records = JsonRecords("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/castle_test3/castle_test3.json", board)
    


    print_fen_board(board)
    print(can_queen_side_castle(board, 'B', json_records))
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

    json_records = JsonRecords("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/castle_test4/castle_test4.json", board)
    


    print_fen_board(board)
    print(can_queen_side_castle(board, 'B', json_records))
    print('\n')


