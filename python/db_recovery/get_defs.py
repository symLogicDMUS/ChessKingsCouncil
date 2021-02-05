import json


def get_defs():
    """get the JSON object inside sampleDefs.json"""
    f = open("./test_objects/sampleDefs/sampleDefs.json", 'r')
    data = f.read()
    sampleDefs = json.loads(data)
    json.dumps(sampleDefs, indent=4, sort_keys=True)
    return sampleDefs


if __name__ == "__main__":
    sampleDefs = get_defs()
    for piece_name in sampleDefs.keys():
        print(piece_name)