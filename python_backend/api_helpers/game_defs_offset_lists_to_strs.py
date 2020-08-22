import json
from pprint import pprint
from api_helpers.convert_offset_pairs_to_strs import convert_offset_pairs_to_strs as convert


def game_defs_offset_lists_to_strs(piece_defs):
    """
    :param piece_defs: piece definitions for a game
    :return: piece_defs with offsets converted from form [x,y] to form 'x,y'
    """
    for name in piece_defs.keys():
        for color in ['W', 'B']:
            piece_defs[name][color]['offsets'] = convert(piece_defs[name][color]['offsets'])
    return piece_defs


if __name__ == "__main__":
    f = open("../game_logic/test_objects/pieces/evilMorty.json", "r")
    data = f.read()
    evil_morty = json.loads(data)
    json.dumps(evil_morty)
    f.close()
    f = open("../game_logic/test_objects/pieces/octocat.json", "r")
    data = f.read()
    octocat = json.loads(data)
    json.dumps(octocat)
    f.close()

    pprint(game_defs_offset_lists_to_strs({"EvilMorty": evil_morty, "Octocat": octocat}))
