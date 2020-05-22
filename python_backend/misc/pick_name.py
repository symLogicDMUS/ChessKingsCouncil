from custom_except import *
import os


def pick_name():
    """pick a game name for a new game"""
    name = input("enter name:")
    while not name.isidentifier() or name == '_initialBoard':
        print("name must consist of characters A-Z, a-z, or '_' and can not be and the starting game board")
        name = input("enter name:")
    if name in os.listdir("../saved_games"):
        yn = input("a game named {} already exists. Would you like to overwrite it? (Y/N)")
        while yn != 'Y' and yn != 'N':
            yn = input("a game named {} already exists. Would you like to overwrite it? (Y/N)")
        if yn == 'Y':
            os.rmdir('../saved_games/{}'.format(name))
        else:
            name = pick_name()
    return name


if __name__ == "__main__":
    pass  # TODO: implement test
