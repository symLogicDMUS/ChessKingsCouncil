import os
import json
from game_logic.coordType.rankfile.map_xy_to_rf import map_xy_to_rf


def save(game_name, fen, json_records):
    """save information about game in its designated folder"""
    f = open('../../saved games/{}/{}.fen'.format(game_name, game_name), 'w')
    f.write(fen)
    f.close()

    records = json_records.get_records()
    records = map_xy_to_rf(records)
    with open('../../saved games/{}/{}.json'.format(game_name, game_name), 'w') as outfile:
        json.dump(records, outfile, indent=4, sort_keys=False)
    outfile.close()


if __name__ == "__main__":
    pass  # TODO: implement test
