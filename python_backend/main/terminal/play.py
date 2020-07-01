from bools.game_over import game_over
from load_save.load import load
from pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from color.get_next_color import get_next_color
from ranges.top.get_ranges import get_ranges
from getters.get_reset_piece_dicts import get_reset_piece_dicts
from getters.get_king_locs import get_king_locs
from threatArea.top.get_threat_area import get_threat_area
from restriction.get_num_pieces_checking_king import get_num_pieces_checking_king
from pins.top.get_pins import get_pins
from restriction.get_multithreat_restriction import get_multithreat_restriction
from ranges.top.get_final_ranges import get_final_ranges
from fenParser.getFen.top.get_fen import get_fen
from movePiece.top.make_move import make_move
from helpers.fifty_move_draw import fifty_move_draw
from ranges.specialMoves.pawn_promotion.promote import promote
from load_save.save import save
from printers.print_board import print_board
from termcolor import colored


def play_game(game_name):
    """game loop located here"""
    fen_obj, board, json_records = load(game_name)
    color = fen_obj.turn.upper()
    moved, x, p_flag = False, False, False
    start, dest = "", ""
    print_board(board)
    while not x:
        init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
        init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records)
        k_loc = get_king_locs(board, color)
        threat_area = get_threat_area(k_loc, board, color)
        pd_dict = get_pathdata_dict(k_loc, board, color)
        pins = get_pins(k_loc, board, color, pd_dict, pins)
        npck = get_num_pieces_checking_king(k_loc, board, color, pd_dict)
        mt_restricts = get_multithreat_restriction(board, npck, color)
        final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts, color)
        json_records.update_state(board, final_ranges, get_next_color(color), npck)
        if game_over(json_records.game_status):
            break
        start, dest, board, captured, x = make_move(board, start, dest, color, final_ranges, special_moves)
        board, p_flag, = promote(board, start, dest, color, default=True)
        json_records.update_hist(board[dest], start, dest, p_flag)
        fen_obj.update_state(special_moves, json_records, start, dest, captured, color)
        json_records, x = fifty_move_draw(fen_obj.hm_clock, json_records, default=True)
        print_board(board, heading=colored(json_records.condition))
        color = get_next_color(color)

    print_board(board, heading=colored(json_records.condition, 'red'), highlights=dest)
    print("Game Over. Winner: {}".format(json_records.winner))
    pos_str = get_fen(board)
    fen = fen_obj.set_get_new_fen(pos_str)
    save(game_name, fen, json_records)


if __name__ == "__main__":
    play_game('New')
