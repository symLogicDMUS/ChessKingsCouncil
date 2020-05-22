from custom_except import *
import re
import os


def get_status_str(fen):
    """method to strip the piece positions part of fen string, and return the remaining data"""
    status_str = re.sub(r'([rnkqbpRNKQBP1-8]+/*){8}', '', fen)
    status_str.strip()
    return status_str


if __name__ == "__main__":
    saved_games = os.listdir('../../saved_games')
    for game in saved_games:
        f = open('../../saved_games/{}/{}.fen'.format(game, game), 'r')
        fen = f.readline()
        print(get_status_str(fen))


