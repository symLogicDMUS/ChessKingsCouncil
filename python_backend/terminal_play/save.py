import os
import json
from game_logic.coordType.rankfile.map_xy_to_rf import map_xy_to_rf
from game_logic.JsonRecords.JsonRecords import JsonRecords
from api_helpers.helpers.filepath import get_dir_containing_name


def save(game_name, game_type, player_type, fen, records, status_obj, id_dict, range_defs, promos):
    """save information about game in its designated folder
    game_name: name of the game being saved.
    board: data describing game board.
    json_records: data for special moves and other things (the dict, not the object)
    id_dict: key is id for piece, name is name of piece.
    range_defs: describes how each piece can move
    success or failure integer and message to backend.
    """

    dir_ = get_dir_containing_name('saved_terminal_games')

    # create game folder:
    if game_name not in os.listdir('{}/saved_terminal_games'.format(dir_)):
        os.mkdir('{}/saved_terminal_games/{}'.format(dir_, game_name))

    # save fen
    f = open('{}/saved_terminal_games/{}/{}.fen'.format(dir_, game_name, game_name), 'w')
    f.write(fen)
    f.close()

    # saving game type
    f = open('{}/saved_terminal_games/{}/{}.type'.format(dir_, game_name, game_name), 'w')
    f.write(game_type)
    f.close()

    # saving player type
    f = open('{}/saved_terminal_games/{}/{}.pt'.format(dir_, game_name, game_name), 'w')
    f.write(player_type)
    f.close()

    # save json_records
    map_xy_to_rf(records)
    with open('{}/saved_terminal_games/{}/{}.json'.format(dir_, game_name, game_name), 'w') as outfile:
        json.dump(records, outfile, indent=4, sort_keys=False)
    outfile.close()

    # save id_dict
    with open('{}/saved_terminal_games/{}/{}.ids'.format(dir_, game_name, game_name), 'w') as outfile:
        json.dump(id_dict, outfile, indent=4, sort_keys=True)

    # save range_defs
    with open('{}/saved_terminal_games/{}/{}.defs'.format(dir_, game_name, game_name), 'w') as outfile:
        json.dump(range_defs, outfile, indent=4, sort_keys=True)

    # save pawn promotion choices (piece names)
    with open('{}/saved_terminal_games/{}/{}.promos'.format(dir_, game_name, game_name), 'w') as outfile:
        json.dump(promos, outfile, indent=4, sort_keys=True)

    # save game status
    with open('{}/saved_terminal_games/{}/{}.status'.format(dir_, game_name, game_name), 'w') as outfile:
        json.dump(status_obj, outfile, indent=4, sort_keys=True)

    return


if __name__ == "__main__":
    pass  # TODO: implement test
