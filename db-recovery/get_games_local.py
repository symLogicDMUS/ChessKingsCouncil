import os
from get_local_game import get_local_game


def get_games_local():
    """
    """
    data_dict = {}
    for game_name in os.listdir("./example_games"):
        data_dict[game_name] = get_local_game(game_name)
    return data_dict


if __name__ == "__main__":
    data_dict = get_games_local()
