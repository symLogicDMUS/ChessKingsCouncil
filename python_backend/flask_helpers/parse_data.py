import json
from flask_helpers.get_data import get_data
from game_logic.color.get_next_color import get_next_color
from game_logic.printers.print_args import print_args
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


def parse_data(game_name):
    """replicate behavior without api call"""
    fen_obj, board, json_records, update_method, defs_ = get_data(game_name)
    color = fen_obj.turn.upper()
    init_ranges, pins, mt_restricts, final_ranges = get_reset_piece_dicts(board, color)
    init_ranges, special_moves = get_ranges(board, color, init_ranges, json_records, defs_)
    k_loc = get_king_locs(board, color)
    threat_area = get_threat_area(board, k_loc, color,  defs_["range_defs"], defs_["id_dict"])
    pd_dict = get_pathdata_dict(board, k_loc, color,  defs_["range_defs"], defs_["id_dict"])
    pins = get_pins(pd_dict, pins)
    npck = get_num_pieces_checking_king(board, k_loc, color, defs_["range_defs"], defs_["id_dict"], pd_dict)
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
    data["id_dict"] = defs_['id_dict']
    data['defs'] = defs_['range_defs']
    return data


if __name__ == "__main__":
    f = open("../defs.json", "r")
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=False)
    print_args(parse_data("dummy_game"), pp=True)
