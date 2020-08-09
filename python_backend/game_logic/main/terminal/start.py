from game_logic.main.terminal.play import play_game
from game_logic.helpers.pick_name import pick_name
from game_logic.helpers.create_data import create_data
from pprint import pprint
import os


def start():
    """First function of the Python execution. Load a game or start a new one"""
    games = os.listdir('../saved games')
    print("Welcome to Chess")
    print("New Game:  N")
    print("Load Game: L")
    c = input()
    while c != 'N' and c != 'L':
        print("not a choice")
        print("New Game:  N")
        print("Load Game: L")
        c = input()
    if c == 'N':
        game_name = pick_name()
        create_data(game_name)
        play_game(game_name)
    else:
        ol = [str(i + 1) + '.' for i in range(len(games))]
        games_dict = dict(zip(ol, games))
        print("select game by number in list:")
        pprint(games_dict)
        n = input()
        while n not in games_dict.keys():
            print("not a valid choice")
            print("select game by number in list:")
            pprint(games_dict)
            n = input()
        play_game(games_dict[n])


if __name__ == "__main__":
    start()  # application begins here
