import json


def get_local_game(game_file):
    f = open("./local_data/saved_games/{}".format(game_file), 'r')
    data = f.read()
    game_data = json.loads(data)
    f.close()
    game_name, dot, exten = game_file.partition('.')
    return game_data, game_name
