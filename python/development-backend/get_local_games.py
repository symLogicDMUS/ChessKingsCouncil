import os
import json
from pprint import pprint


def get_local_games():
    """ """
    data_dict = {}
    for game_file in os.listdir("local_data/saved_games"):
        f = open("./local_data/saved_games/{}".format(game_file), 'r')
        data = f.read()
        game_data = json.loads(data)
        game_name, dot, exten = game_file.partition('.')
        data_dict[game_name] = game_data
        f.close()
    return data_dict


if __name__ == "__main__":
    data_dict = get_local_games()
    pprint(data_dict)
