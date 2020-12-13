import os
import json
from pprint import pprint
from get_local_game import get_local_game


def get_local_games():
    """ """
    data_dict = {}
    for game_file in os.listdir("./local_data/saved_games"):
        game_data, game_name = get_local_game(game_file)
        data_dict[game_name] = game_data
    return data_dict


if __name__ == "__main__":
    data_dict = get_local_games()
    pprint(data_dict)
