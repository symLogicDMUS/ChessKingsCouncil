import os
from z_flask.parse_data import parse_data
from printers.print_args import print_args


def get_data_dict():
    """get all the saved game data at the start of the game"""
    print('GET request, getting data of all the games')
    data_dict = {}
    games = os.listdir('../example_games')
    for game_name in games:
        data_dict[game_name] = parse_data(game_name)
    return data_dict


if __name__ == "__main__":
    print_args(get_data_dict(), pp=True)