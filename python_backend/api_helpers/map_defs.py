import json
from pprint import pprint
from api_helpers.convert_offset_strs_to_pairs import convert_offset_strs_to_pairs


def map_defs(defs):
    """ """
    for piece_name in defs.keys():
        for color in ['W', 'B']:
            defs[piece_name][color]['offsets'] = convert_offset_strs_to_pairs(defs[piece_name][color]['offsets'])
    return defs


if __name__ == "__main__":
    f = open("../defs.json", "r")
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=True)
    defs = map_defs(defs)
    pprint(defs)
