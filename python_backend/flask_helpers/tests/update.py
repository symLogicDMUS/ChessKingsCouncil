from game_logic.printers.print_args import print_args
from game_logic.printers.print_board import print_board
from game_logic.pathsInfo import get_pathdata_dict
from game_logic.ranges import get_ranges
from game_logic.getters.get_reset_piece_dicts import get_reset_piece_dicts
from game_logic.threatArea.get_king_locs import get_king_locs
from game_logic.threatArea import get_threat_area
from game_logic.restriction import get_num_pieces_checking_king
from game_logic.pins import get_pins
from game_logic.restriction import get_multithreat_restriction
from game_logic.ranges.top.get_final_ranges import get_final_ranges
from game_logic.JsonRecords import JsonRecords
from game_logic.coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from game_logic.coordType.xy import map_rf_to_xy
from pprint import pprint
import json


def update(data):
    """update the ranges of pieces and the state of the game and return to React """
    print("POST request, update()""")
    data = json.loads(data)
    data = map_rf_to_xy(data)
    board, records, color = data['board'], data['records'], data['color']
    print_board(board)
    pprint(records)
    json_records = JsonRecords(None, None, j_records=records)
    init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
    init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records)
    k_loc = get_king_locs(board, color)
    threat_area = get_threat_area(k_loc, board, color)
    pd_dict = get_pathdata_dict(k_loc, board, color)
    pins = get_pins(k_loc, board, color, pd_dict, pins)
    npck = get_num_pieces_checking_king(k_loc, board, color, pd_dict)
    mt_restricts = get_multithreat_restriction(board, npck, color)
    final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts, color)
    special_moves.set_promos(board, final_ranges, color)
    moves = special_moves.get_moves()
    data = map_xy_to_rf({"ranges": final_ranges, "moves": moves})
    pprint(data)
    return data


if __name__ == "__main__":
    # fen_obj, board, records = get_data('enpassant_test1')
    # data = map_xy_to_rf({'records': records.get_records(), 'color': fen_obj.turn.upper(), 'board': board})
    f = open('./payloads/en_passant_test2.json')
    data = f.read()
    print_args(update(data))
