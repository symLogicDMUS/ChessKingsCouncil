from game_logic.ranges.specialMoves.enPassant.is_enp_black_att_r import is_enp_black_att_r
from game_logic.ranges.specialMoves.enPassant.is_enp_white_att_r import is_enp_white_att_r
from game_logic.ranges.specialMoves.enPassant.pawn_moved_once_2_sqrs import pawn_moved_once_2_sqrs
from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.sqr_case.get_sqr_case import get_sqr_case
from game_logic.sqr_case.sqr_cases import *
from game_logic.JsonRecords import JsonRecords


def can_enpassant(attacking, attacked, board, color, pawn_histories, ncnpm, lpm):
    """return true if an en-passant can be performed given sqr1 and sqr2 alignment, else false
       ncnpm: Number Consecutive Non Pawn Moves
    """
    if color == 'W' and not is_enp_white_att_r(attacking):
        return False
    if color == 'B' and not is_enp_black_att_r(attacking):
        return False
    if get_sqr_case(board, attacked[0], attacked[1], color) != ENEMY:
        return False
    if get_piece_type(board[attacked]) != 'P':
        return False
    if ncnpm != 0:
        return False
    if not pawn_moved_once_2_sqrs(pawn_histories, board[attacked]):
        return False
    if attacked != lpm:
        return False

    return True


if __name__ == "__main__":

    # test 1, en_passant_test1:
    print('test 1, en_passant_test1')
    board =\
    {(1, 8): 'BR1', (2, 8): 'BN2', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): '#', (8, 8): 'BR2',
    (1, 7): 'BP2', (2, 7): '#', (3, 7): 'BP3', (4, 7): 'BP4', (5, 7): 'BP5', (6, 7): 'BP6', (7, 7): 'BP7', (8, 7): 'BP8', 
    (1, 6): '#', (2, 6): '#', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): 'BN1', (7, 6): '#', (8, 6): '#', 
    (1, 5): '#', (2, 5): 'BP1', (3, 5): 'WP8', (4, 5): '#', (5, 5): '#', (6, 5): '#', (7, 5): '#', (8, 5): '#', 
    (1, 4): '#', (2, 4): '#', (3, 4): '#', (4, 4): '#', (5, 4): '#', (6, 4): '#', (7, 4): '#', (8, 4): '#', 
    (1, 3): '#', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#', 
    (1, 2): 'WP1', (2, 2): 'WP2', (3, 2): '#', (4, 2): 'WP3', (5, 2): 'WP4', (6, 2): 'WP5', (7, 2): 'WP6', (8, 2): 'WP7', 
    (1, 1): 'WR1', (2, 1): 'WN1', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB2', (7, 1): 'WN2', (8, 1): 'WR2'}

    json_records = JsonRecords("C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/enpassant_test1/enpassant_test1.json", board)
    print(can_enpassant((3, 5), (2, 5), board, 'W', json_records.pawn_histories, json_records.num_consecutive_non_pawn_moves, json_records.last_pawn_move))
