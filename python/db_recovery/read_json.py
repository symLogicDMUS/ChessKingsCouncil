import os
import json


def read_json(file_path):
    """ """
    f = open(file_path, 'r')
    data = f.read()
    dict_obj = json.loads(data)
    json.dumps(dict_obj, indent=4, sort_keys=True)
    return dict_obj
