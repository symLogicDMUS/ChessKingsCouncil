import json


def get_defs():
    """get the JSON object inside defs.json"""
    f = open("./test_objects/defs/defs.json", 'r')
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=True)
    return defs


if __name__ == "__main__":
    defs = get_defs()
    for piece_name in defs.keys():
        print(piece_name)