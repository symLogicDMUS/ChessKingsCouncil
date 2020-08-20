

def get_full_fen(pos_str, fen_obj):
    """join the position string with the status attributes updated throughout the game, to get the full fen string"""
    return " ".join([pos_str, fen_obj["turn"], fen_obj["castle_avail"], fen_obj["en_passant_avail"], str(fen_obj["hm_clock"]), str(fen_obj["fm_clock"])])


if __name__ == "__main__":
    pass  # TODO: implement test
