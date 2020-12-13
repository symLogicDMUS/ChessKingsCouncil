import json


def get_local_defs():
    f = open("local_data/defs.json", 'r')
    data = f.read()
    defs = json.loads(data)
    json.dumps(defs, indent=4, sort_keys=True)
    return defs
