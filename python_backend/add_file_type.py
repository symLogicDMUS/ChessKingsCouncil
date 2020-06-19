import json
import os


def add_file_type(extention):
    """ """
    for game_name in os.listdir("./saved_games"):
        f = open('./saved_games/{}/{}.{}'.format(game_name, game_name, extention), 'w')
        f.close()


def add_data(data, extention):
    """ """
    for game_name in os.listdir("./example_games"):
        with open('./example_games/{}/{}.{}'.format(game_name, game_name, extention), 'w') as outfile:
            json.dump(data, outfile, indent=4, sort_keys=False)
        outfile.close()


if __name__ == "__main__":
    add_data({"r": "Rook", "b": "Bishop", "q": "Queen", "n": "Knight"}, "defs")
