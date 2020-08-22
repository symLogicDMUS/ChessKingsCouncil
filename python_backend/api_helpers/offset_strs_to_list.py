import json
from pprint import pprint
from api_helpers.convert_offset_strs_to_pairs import convert_offset_strs_to_pairs


def offset_strs_to_list(piece_defs):
    """ """
    for piece_name in piece_defs.keys():
        for color in ['W', 'B']:
            convert_offset_strs_to_pairs(piece_defs[piece_name][color]['offsets'])
    return piece_defs


if __name__ == "__main__":
    f = open("../defs.json", "r")
    data = f.read()
    piece_defs = json.loads(data)
    json.dumps(piece_defs)
    f.close()
    pprint(offset_strs_to_list(piece_defs))
