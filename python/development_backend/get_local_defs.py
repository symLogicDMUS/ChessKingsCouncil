import json


def get_local_defs():
    f = open("./local_data/sampleDefs.json", 'r')
    data = f.read()
    sampleDefs = json.loads(data)
    json.dumps(sampleDefs, indent=4, sort_keys=True)
    return sampleDefs
