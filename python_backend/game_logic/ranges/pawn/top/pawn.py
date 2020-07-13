from game_logic.ranges.specialMoves.enPassant.get_en_passant_alignment_key import get_en_passant_alignment_key
from game_logic.ranges.pawn.get_potential_1_sqr_jumps import get_potential_1_sqr_jumps
from game_logic.ranges.specialMoves.enPassant.can_en_passant import can_enpassant
from game_logic.ranges.pawn.get_potential_captures import get_potential_captures
from game_logic.ranges.pawn.is_actual_1_sqr_jumps import is_actual_1_sqr_jumps
from game_logic.ranges.pawn.get_actual_captures import get_actual_captures
from game_logic.step_funcs.step_funcs import step_1sqr180d, step_1sqr0d
from game_logic.ranges.specialMoves.SpecialMoves import SpecialMoves
from game_logic.ranges.pawn.valid_2_sqr_jump import valid_2_sqr_jump
from game_logic.ranges.pawn.get_2_sqr_jump import get_2_sqr_jump
from game_logic.piece_type.get_piece_type import get_piece_type
from game_logic.ranges.specialMoves.enPassant.get_t_sqr import get_t_sqr
from game_logic.printers.print_board import print_board
from game_logic.JsonRecords.JsonRecords import JsonRecords
from game_logic.color.get_color import get_color


def pawn(board, sqr, color, json_records, special_moves):
    """get the range of pawn at location sqr and of the given color"""
    range_ = []
    potential_1_sqr = get_potential_1_sqr_jumps(sqr, board, color)

    # if potential 1 square jump is an actual 1 square jump...
    if is_actual_1_sqr_jumps(board, potential_1_sqr, color):
        # ..add jump to the range
        range_.append(potential_1_sqr)

    # if there is a 2 sqr jump availible..
    if valid_2_sqr_jump(sqr, board, color, json_records.pawn_histories):
        # ..get the 2 sqr jump
        two_sqr_jump = get_2_sqr_jump(sqr, color)
        # add the 2 square jump to range
        range_.append(two_sqr_jump)

    # if can capture the pawn left of it by en-passant...
    if can_enpassant(sqr, step_1sqr180d(sqr[0], sqr[1]), board, color,
                     json_records.pawn_histories, json_records.num_consecutive_non_pawn_moves, json_records.last_pawn_move):  # 80d
        # ..get the alignment key for the en-passant 
        align_key = get_en_passant_alignment_key(sqr, step_1sqr180d(sqr[0], sqr[1]))
        # get the target square for the en-passant
        t_sqr = get_t_sqr(color, align_key)
        # add target square to range
        range_.append(t_sqr)
        # add target square to special_moves enPassant list
        special_moves.add_en_passant((sqr, t_sqr))

    # else if can capture the pawn right of it by en-passant...
    elif can_enpassant(sqr, step_1sqr0d(sqr[0], sqr[1]), board, color,
                       json_records.pawn_histories, json_records.num_consecutive_non_pawn_moves, json_records.last_pawn_move):  # 0d
        # get the alignment key for the en-passant
        align_key = get_en_passant_alignment_key(sqr, step_1sqr0d(sqr[0], sqr[1]))
        # get the target square for the en-passant
        t_sqr = get_t_sqr(color, align_key)
        # add target square to range
        range_.append(t_sqr)
        # add target square to special_moves enPassant list
        special_moves.add_en_passant((sqr, t_sqr))

    # get the squares this pawn could potentially capture piece if moved there
    potential_captures = get_potential_captures(sqr, board, color)
    # get the squares this pawn would actually be capturing piece if moved there, and add to range
    range_.extend(get_actual_captures(board, potential_captures, color))

    return range_, special_moves


if __name__ == "__main__":

    # example_games/pawn_range 
    board = \
        {(1, 8): 'BR1', (2, 8): '#', (3, 8): 'BB1', (4, 8): 'BQ1', (5, 8): 'BK1', (6, 8): 'BB2', (7, 8): 'BN2', (8, 8): 'BR2',
         (1, 7): 'BP5', (2, 7): '#', (3, 7): 'BP6', (4, 7): '#', (5, 7): '#', (6, 7): 'BP7', (7, 7): 'BP8', (8, 7): '#',
         (1, 6): '#', (2, 6): 'BP4', (3, 6): '#', (4, 6): '#', (5, 6): '#', (6, 6): '#', (7, 6): '#', (8, 6): '#',
         (1, 5): 'BN1', (2, 5): '#', (3, 5): '#', (4, 5): 'BP1', (5, 5): 'BP2', (6, 5): '#', (7, 5): 'WP8', (8, 5): 'BP3',
         (1, 4): '#', (2, 4): 'WP5', (3, 4): 'WP6', (4, 4): '#', (5, 4): 'WP7', (6, 4): '#', (7, 4): '#', (8, 4): '#',
         (1, 3): 'WN2', (2, 3): '#', (3, 3): '#', (4, 3): '#', (5, 3): '#', (6, 3): '#', (7, 3): '#', (8, 3): '#',
         (1, 2): 'WP1', (2, 2): '#', (3, 2): '#', (4, 2): 'WP2', (5, 2): '#', (6, 2): 'WP3', (7, 2): '#', (8, 2): 'WP4',
         (1, 1): 'WR1', (2, 1): '#', (3, 1): 'WB1', (4, 1): 'WQ1', (5, 1): 'WK1', (6, 1): 'WB2', (7, 1): 'WN1',
         (8, 1): 'WR2'}

    json_records = JsonRecords(
        "C:/Users/bjrat/source/repos/Python/ChessKingsCouncil/example_games/pawn_range/pawn_range.json",
        board)
    special_moves = SpecialMoves()

    result = []
    for sqr, id_ in board.items():
        if id_ == '#':
            continue
        if get_piece_type(id_) == 'Pawn':
            if get_color(id_) == 'W':
                range, special_moves = pawn(board, sqr, 'W', json_records, special_moves)
            else:
                range, special_moves = pawn(board, sqr, 'B', json_records, special_moves)
            print_board(board, heading=sqr, highlights=range)