from game_logic.ranges.top.get_ranges import get_ranges
from game_logic.pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from game_logic.getters.get_reset_piece_dicts import get_reset_piece_dicts
from game_logic.threatArea.get_king_locs import get_king_locs
from game_logic.threatArea.top.get_threat_area import get_threat_area
from game_logic.restriction.get_num_pieces_checking_king import get_num_pieces_checking_king
from game_logic.restriction.get_multithreat_restriction import get_multithreat_restriction
from game_logic.ranges.top.get_final_ranges import get_final_ranges
from game_logic.coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from game_logic.pins.top.get_pins import get_pins
from game_logic.fenParser.GameStatus.status_update import status_update
from game_logic.color.get_next_color import get_next_color as get_enemy_color
from game_logic.fenParser.GameStatus.is_checkmate import is_checkmate as checkmate
from api_helpers.ai_move import ai_move


def get_turn_data(board, color, ai_color, json_records, piece_defs, id_dict):
    """data for player who's turn it is now, at current point in the game
    calculations:
    ............
    final ranges: where every piece of player's pieces can move to.
    status: is it check, checkmate, stalemate or none of these? is the game over?
    ai_start: the starting square of a move if it is the computer's turn
    ai_dest: the ending square of a move if it is the computer's turn
    ............
    """
    init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
    init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records, piece_defs, id_dict)
    k_loc = get_king_locs(board, color)
    threat_area = get_threat_area(board, k_loc, color, piece_defs, id_dict)
    pd_dict = get_pathdata_dict(board, k_loc, color, piece_defs, id_dict)
    pins = get_pins(pd_dict, pins)
    npck = get_num_pieces_checking_king(board, k_loc, color, pd_dict, piece_defs, id_dict)
    mt_restricts = get_multithreat_restriction(board, npck, color)
    final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts)
    special_moves.set_promos(board, final_ranges, color)

    if color == ai_color and not checkmate(final_ranges):
        ai_capture, ai_start, ai_dest = ai_move(board, final_ranges, ai_color, special_moves)
    else:
        ai_capture, ai_start, ai_dest = False, False, False
    data = {'status': status_update(board, final_ranges, get_enemy_color(color), npck)}
    data.update(map_xy_to_rf({"ranges": final_ranges,
                              "moves": special_moves.get_moves(),
                              "ai_start": ai_start,
                              "ai_dest": ai_dest,
                              "ai_capture": ai_capture}))
    return data
