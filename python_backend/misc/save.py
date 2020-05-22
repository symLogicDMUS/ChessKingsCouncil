from custom_except import *
from coordType.json_keys_to_rf import json_keys_to_rf
import os
import json
import chess
import chess.svg
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM


def save(game_name, fen, json_records):
    """save information about game in its designated folder"""
    f = open('../../saved_games/{}/{}.fen'.format(game_name, game_name), 'w')
    f.write(fen)
    f.close()

    records = json_records.get_records()
    records = json_keys_to_rf(records)
    with open('../../saved_games/{}/{}.json'.format(game_name, game_name), 'w') as outfile:
        json.dump(records, outfile, indent=4, sort_keys=False)
    outfile.close()

    f = open('../../saved_games/{}/{}.svg'.format(game_name, game_name), 'w')
    board = chess.Board(fen)
    board_image = chess.svg.board(board=board)
    f.write(board_image)
    f.close()
    drawing = svg2rlg('../../saved_games/{}/{}.svg'.format(game_name, game_name))
    renderPM.drawToFile(drawing, '../../saved_games/{}/{}.png'.format(game_name, game_name), fmt="PNG")
    os.remove('../../saved_games/{}/{}.svg'.format(game_name, game_name))


if __name__ == "__main__":
    pass  # TODO: implement test
