import json


def write_json(test_obj, save_path):
    """write json object to file to be used for tests"""
    with open(save_path, 'w') as outfile:
        json.dump(test_obj, outfile, indent=4, sort_keys=False)
    outfile.close()
