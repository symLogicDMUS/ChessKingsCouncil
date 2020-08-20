import re
import os


def get_status_str(fen):
    """method to strip the piece positions part of fen string, and return the remaining data"""
    status_str = re.sub(r'([a-zA-Z1-8]+/*){8}', '', fen)
    status_str.strip()
    return status_str


if __name__ == "__main__":
    saved_games = os.listdir('../../saved games')
    for game in saved_games:
        f = open('../../saved games/{}/{}.fen'.format(game, game), 'r')
        fen = f.readline()
        print(get_status_str(fen))


