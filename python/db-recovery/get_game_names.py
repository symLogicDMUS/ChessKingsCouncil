import os


def get_game_names():
    """ """
    game_names = []
    for game_name in os.listdir('outdated/saved games'):
        game_names.append(game_name)
    for game_name in os.listdir('example_games'):
        game_names.append(game_name)
    return game_names


if __name__ == "__main__":
    game_names = get_game_names()
    for game_name in game_names:
        print(game_name)
