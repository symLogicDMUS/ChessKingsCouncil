import os
import json
from db_recovery.get_data import get_data
from pprint import pprint


def get_games():
    """ """
    data_dict = {}
    for game_file in os.listdir("./test_objects/game_entries"):
        f = open("./test_objects/game_entries/{}".format(game_file), 'r')
        data = f.read()
        game_data = json.loads(data)
        game_name, dot, exten = game_file.partition('.')
        data_dict[game_name] = game_data
        f.close()
    return data_dict


if __name__ == "__main__":
    data_dict = get_games()
    pprint(data_dict)
