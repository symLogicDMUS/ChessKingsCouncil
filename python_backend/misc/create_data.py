
import os
import json
import chess
import chess.svg
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM


def create_data(game_name):
    """create a new game and store the .fen, .json, and .svg files from _initialBoard in new directory 'game_name' """
    os.mkdir("../saved_games/{}".format(game_name))

    # fen
    f = open('../example_games/_initialBoard/dummy_game.fen', "r")
    fen = f.readline()
    f.close()
    f = open('../saved_games/{}/{}.fen'.format(game_name, game_name), "w")
    f.write(fen)
    f.close()

    # json
    f = open('../example_games/_initialBoard/dummy_game.json', "r")
    json_data = f.read()
    records = json.loads(json_data)
    json.dumps(records, indent=4, sort_keys=False)
    f.close()
    with open('../saved_games/{}/{}.json'.format(game_name, game_name), 'w') as outfile:
        json.dump(records, outfile)
    outfile.close()

    # PNG (svg first, then delete)
    f = open('../saved_games/{}/{}.svg'.format(game_name, game_name), 'w')
    board = chess.Board(fen)
    board_image = chess.svg.board(board=board)
    f.write(board_image)
    f.close()
    drawing = svg2rlg('../saved_games/{}/{}.svg'.format(game_name, game_name))
    renderPM.drawToFile(drawing, '../saved_games/{}/{}.png'.format(game_name, game_name), fmt="PNG")
    os.remove('../saved_games/{}/{}.svg'.format(game_name, game_name))


if __name__ == "__main__":
    if 'test_name' in os.listdir('../saved_games'):
        for file in os.listdir('../saved_games/test_name'):
            os.remove("../saved_games/test_name/{}".format(file))
        os.rmdir('../saved_games/test_name')
    create_data('test_name')
