import os
import json
from pprint import pprint


def __convert_offset_lists(defs):
    """WARNING: this function will corrupt any dictionary that is the output of a dictionary already passed to it."""
    for name in defs.keys():
        for color in ['W', 'B']:
            for i in range(len(defs[name][color]['offsets'])):
                defs[name][color]['offsets'][i] = "{},{}".format(defs[name][color]['offsets'][i][0], defs[name][color]['offsets'][i][1])
    return defs


if __name__ == "__main__":
    for game_name in os.listdir('./example_games'):
        f = open('/home/brian/ChessKingsCouncil/python_backend/example_games/{}/{}.defs'.format(game_name, game_name))
        data = f.read()
        defs = json.loads(data)
        json.dumps(defs, indent=4, sort_keys=True)
        defs = __convert_offset_lists(defs)
        with open('/home/brian/ChessKingsCouncil/python_backend/example_games/{}/{}.defs'.format(game_name, game_name), "w") as outfile:
            json.dump(defs, outfile, indent=4, sort_keys=False)
        outfile.close()
