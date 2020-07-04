import json
from printers.print_args import print_args
from get_data import get_data
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
from coordType.rankfile.map_xy_to_rf import map_xy_to_rf


def parse_data(game_name):
    """replicate behavior without api call"""
    fen_obj, board, json_records, update_method, defs_ = get_data(game_name)
    color = fen_obj.turn.upper()
    init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
    init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records, defs_)
    k_loc = get_king_locs(board, color)
    threat_area = get_threat_area(k_loc, board, color)
    pd_dict = get_pathdata_dict(k_loc, board, color)
    pins = get_pins(k_loc, board, color, pd_dict, pins)
    npck = get_num_pieces_checking_king(k_loc, board, color, pd_dict)
    mt_restricts = get_multithreat_restriction(board, npck, color)
    final_ranges = get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restricts, color)
    json_records.update_state(board, final_ranges, get_next_color(color), npck)
    special_moves.set_promos(board, final_ranges, color)
    records = json_records.get_records()
    moves = special_moves.get_moves()
    fen_data = fen_obj.get_data()
    data = map_xy_to_rf(
        {"color": color, "fen_data": fen_data, "board": board, "records": records, "ranges": final_ranges,
         "moves": moves, "flask_method": update_method})
    data["id_dict"] = defs_['id_dict']  # piece definition names
    data['range_defs'] = defs_['range_defs']
    return data


if __name__ == "__main__":
    f = open("./defs.json", "r")
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=False)
    print_args(parse_data("castle_test5", defs), pp=True)
