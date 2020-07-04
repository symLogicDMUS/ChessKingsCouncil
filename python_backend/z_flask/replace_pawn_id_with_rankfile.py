from pprint import pprint


def replace_pawn_id_with_rankfile(pawn_histories):
    """swap a pawn id with it's current location in pawn histories."""
    new_pawn_histories = {}
    for pawn_id in pawn_histories.keys():
        new_pawn_histories[pawn_histories[pawn_id][-1]] = pawn_histories[pawn_id]
    return new_pawn_histories


if __name__ == "__main__":
    pprint(replace_pawn_id_with_rankfile({
        "WP3": ["c2", "c4", "b5", "b6", "b7"],
        "WP7": ["g2", "g4", "g5", "f6"],
        "WP8": ["h2", "h4"],
        "BP1": ["a7", "a5"],
        "BP7": ["g7", "g5", "g4"],
        "BP8": ["h7", "h5"]}))
