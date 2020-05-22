from custom_except import *
from print_args import print_args
from getters.get_pathdata_dict import get_pathdata_dict
from getters.get_next_color import get_next_color
from getters.get_ranges import get_ranges
from getters.get_piece_dicts import get_piece_dicts
from getters.get_king_locs import get_king_locs
from getters.get_threat_area import get_threat_area
from getters.get_num_pieces_checking_king import get_num_pieces_checking_king
from getters.get_pins import get_pins
from getters.get_multithreat_restriction import get_multithreat_restriction
from getters.get_final_ranges import get_final_ranges
from JsonRecords.JsonRecords import JsonRecords
from coordType.json_keys_to_rf import json_keys_to_rf
from coordType.json_keys_to_xy import json_keys_to_xy
import json


def update(data):
    """update the ranges of pieces and the state of the game and return to React """
    print("POST request, update()""")
    data = json.loads(data)
    data = json_keys_to_xy(data)
    board, records, color = data['board'], data['records'], data['color']
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
    json_records.update_state(board, final_ranges, get_next_color(color), npck)
    records = json_records.get_records()
    moves = special_moves.get_moves()
    data = json_keys_to_rf({"color": color, "ranges": final_ranges, "records": records, "moves": moves})
    return data


if __name__ == "__main__":
    f = open('./test_payload_1.txt')
    data = f.read()
    print_args(update(data))
