import json
import os


def add_file_type(folder, extention):
    """ """
    for game_name in os.listdir("../../{}".format(folder)):
        f = open('../../{}/{}/{}.{}'.format(folder, game_name, game_name, extention), 'w')
        f.close()


def add_data(folder, data, extention):
    """ """
    for game_name in os.listdir("../../{}".format(folder)):
        f = open("../../{}/{}/{}.{}".format(folder, game_name, game_name, extention), 'w')
        f.write(data)
        f.close()


def add_data_json(folder, data, extention):
    """ """
    for game_name in os.listdir("../../{}".format(folder)):
        with open('../../{}/{}/{}.{}'.format(folder, game_name, game_name, extention), 'w') as outfile:
            json.dump(data, outfile, indent=4, sort_keys=False)
        outfile.close()


if __name__ == "__main__":
    add_file_type("example_games", "pt")
    add_file_type("saved_games", "pt")
    add_data("example_games", "test", "pt")
    add_data("saved_games", "test", "pt")
