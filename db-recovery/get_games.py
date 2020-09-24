import os
from get_data import get_data
from pprint import pprint


def get_games():
    """ """
    data_dict = {}
    for game_name in os.listdir('./saved games'):
        data_dict[game_name] = get_data('saved games', game_name)
    for game_name in os.listdir('./example_games'):
        data_dict[game_name] = get_data('example_games', game_name)
    return data_dict


if __name__ == "__main__":
    data_dict = get_games()
    pprint(data_dict)