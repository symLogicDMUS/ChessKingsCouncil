import json


def get_data(location, game_name):
    """get the data saved in the files for a game_name"""

    print(game_name)

    f = open("./{}/{}/{}.fen".format(location, game_name, game_name), 'r')
    fen = f.readline()
    f.close()

    f = open("./{}/{}/{}.json".format(location, game_name, game_name), 'r')
    data = f.read()
    json_records = json.loads(data)
    json.dumps(json_records)
    f.close()

    f = open("./{}/{}/{}.type".format(location, game_name, game_name), 'r')
    game_type = f.readline()
    f.close()

    f = open("./{}/{}/{}.pt".format(location, game_name, game_name), 'r')
    player_type = f.read()
    f.close()

    f = open("./{}/{}/{}.status".format(location, game_name, game_name), 'r')
    data = f.read()
    status = json.loads(data)
    json.dumps(status)
    f.close()

    f = open("./{}/{}/{}.ids".format(location, game_name, game_name), 'r')
    data = f.read()
    id_dict = json.loads(data)
    json.dumps(id_dict)
    f.close()

    f = open("./{}/{}/{}.sampleDefs".format(location, game_name, game_name), 'r')
    data = f.read()
    piece_defs = json.loads(data)
    json.dumps(piece_defs)
    f.close()

    f = open("./{}/{}/{}.promos".format(location, game_name, game_name), 'r')
    data = f.read()
    promo_choices = json.loads(data)
    json.dumps(promo_choices)
    f.close()

    return {"fen": fen,
            "json": json_records,
            "type": game_type,
            "pt": player_type,
            "status": status,
            "ids": id_dict,
            "sampleDefs": piece_defs,
            "promos": promo_choices}


if __name__ == "__main__":
    get_data('example_games', 'NewCouncil')