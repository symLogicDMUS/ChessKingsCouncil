

def get_fen_str(pos_str, fen_obj):
    """join the position string with the status attributes updated throughout the game, then return"""
    return " ".join([pos_str, fen_obj["turn"], fen_obj["castle_avail"], fen_obj["en_passant_avail"], str(fen_obj["hm_clock"]), str(fen_obj["fm_clock"])])