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
from game_logic.test_objects.sample_board_dicts import sample_board_dicts
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
                     json_records.pawn_histories, json_records.num_consecutive_non_pawn_moves, json_records.last_pawn_move):  # 180d
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

    board = sample_board_dicts['en-passant-test']
    json_records = JsonRecords("../../../../saved games/en-passant-test/en-passant-test.json", board)
    special_moves = SpecialMoves()
    range_, special_moves = pawn(board, (2, 5), 'W', json_records, special_moves)
    print_board(board, heading="pawn range", highlights=range_)
