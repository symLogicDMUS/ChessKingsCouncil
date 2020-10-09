from pprint import pprint
import json


def get_local_game(game_name):
    """get the data saved in the files for a game_name"""

    print(game_name)

    f = open("./example_games/{}/{}.fen".format(game_name, game_name), 'r')
    fen = f.readline()
    f.close()

    f = open("./example_games/{}/{}.json".format(game_name, game_name), 'r')
    data = f.read()
    json_records = json.loads(data)
    json.dumps(json_records)
    f.close()

    f = open("./example_games/{}/{}.type".format(game_name, game_name), 'r')
    game_type = f.readline()
    f.close()

    f = open("./example_games/{}/{}.pt".format(game_name, game_name), 'r')
    player_type = f.read()
    f.close()

    f = open("./example_games/{}/{}.status".format(game_name, game_name), 'r')
    data = f.read()
    status = json.loads(data)
    json.dumps(status)
    f.close()

    f = open("./example_games/{}/{}.ids".format(game_name, game_name), 'r')
    data = f.read()
    id_dict = json.loads(data)
    json.dumps(id_dict)
    f.close()

    f = open("./example_games/{}/{}.defs".format(game_name, game_name), 'r')
    data = f.read()
    piece_defs = json.loads(data)
    json.dumps(piece_defs)
    f.close()

    f = open("./example_games/{}/{}.promos".format(game_name, game_name), 'r')
    data = f.read()
    promo_choices = json.loads(data)
    json.dumps(promo_choices)
    f.close()
    return {
        "fen": fen,
        "json": json_records,
        "status": status,
        "type": game_type,
        "pt": player_type,
        "promos": promo_choices,
        "defs": piece_defs,
        "ids": id_dict
    }


if __name__ == "__main__":
    pprint(get_local_game("fundemental_defense"))
