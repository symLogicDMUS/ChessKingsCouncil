from printers.print_args import print_args
from printers.print_board import print_board
from pathsInfo.top.get_pathdata_dict import get_pathdata_dict
from ranges.top.get_ranges import get_ranges
from getters.get_piece_dicts import get_piece_dicts
from getters.get_king_locs import get_king_locs
from threatArea.top.get_threat_area import get_threat_area
from getters.get_num_pieces_checking_king import get_num_pieces_checking_king
from pins.top.get_pins import get_pins
from getters.get_multithreat_restriction import get_multithreat_restriction
from getters.get_final_ranges import get_final_ranges
from JsonRecords.JsonRecords import JsonRecords
from coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from coordType.xy.map_rf_to_xy import map_rf_to_xy
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
    init_ranges, pins, mt_restricts, final_ranges = get_piece_dicts(board, color)
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
    f = open('./json_strs/en_passant_test2.txt')
    data = f.read()
    print_args(update(data))
