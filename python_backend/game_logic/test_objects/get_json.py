import json


def get_json(path):
    """ """
    f = open(path, 'r')
    data = f.read()
    json_obj = json.loads(data)
    json.dumps(json_obj)
    f.close()
    return json_obj
