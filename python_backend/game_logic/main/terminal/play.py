from flask_helpers.get_data import get_data
from game_logic.bools.game_over import game_over
from game_logic.load_save.load import load
from game_logic.pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from game_logic.color.get_next_color import get_next_color
from game_logic.ranges.top.get_ranges import get_ranges
from game_logic.getters.get_reset_piece_dicts import get_reset_piece_dicts
from game_logic.threatArea.get_king_locs import get_king_locs
from game_logic.threatArea.top.get_threat_area import get_threat_area
from game_logic.restriction.get_num_pieces_checking_king import get_num_pieces_checking_king
from game_logic.restriction.get_multithreat_restriction import get_multithreat_restriction
from game_logic.pins.top.get_pins import get_pins
from game_logic.ranges.top.get_final_ranges import get_final_ranges
from game_logic.fenParser.getFen.top.get_fen import get_fen
from game_logic.movePiece.top.make_move import make_move
from game_logic.helpers.fifty_move_draw import fifty_move_draw
from game_logic.ranges.specialMoves.pawn_promotion.promote import promote
from game_logic.load_save.save import save
from game_logic.printers.print_board import print_board
from termcolor import colored

# TODO: refactor get_ranges to take a piece definition object as seen in app.py


def play_game(game_name):
    """game loop located here/ WARNING: need to refactor get_ranges"""
    fen_obj, board, json_records, flask_method, defs_ = get_data(game_name)
    color = fen_obj.turn.upper()
    moved, x, p_flag = False, False, False
    start, dest = "", ""
    print_board(board)
    while not x:
        init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
        init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records, defs_)
        k_loc = get_king_locs(board, color)
        threat_area = get_threat_area(board, k_loc, color, defs_['range_defs'], defs_['id_dict'])
        pd_dict = get_pathdata_dict(board, k_loc, color, defs_['range_defs'], defs_['id_dict'])
        pins = get_pins(pd_dict, pins)
        npck = get_num_pieces_checking_king(board, k_loc, color, defs_['range_defs'], defs_['id_dict'], pd_dict)
        mt_restricts = get_multithreat_restriction(board, npck, color)
        final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts)
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
