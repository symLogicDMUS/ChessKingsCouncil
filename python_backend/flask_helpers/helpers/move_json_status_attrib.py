import os
import json


def move_json_status_attrib():
    """ """
    for game_name in os.listdir("../../example_games"):

        f = open("../../example_games/{}/{}.json".format(game_name, game_name), "r")
        json_data = f.read()
        records = json.loads(json_data)
        json.dumps(records, indent=4, sort_keys=False)
        f.close()

        status = {'status': records['status'], 'condition': records['condition'],
                       'winner': records['winner']}

        with open('../../example_games/{}/{}.status'.format(game_name, game_name), 'w') as outfile:
            json.dump(status, outfile, indent=4, sort_keys=False)
        outfile.close()

        del records['status']
        del records['condition']
        del records['winner']

        with open('../../example_games/{}/{}.json'.format(game_name, game_name), 'w') as outfile:
            json.dump(records, outfile, indent=4, sort_keys=False)
        outfile.close()


if __name__ == "__main__":
    move_json_status_attrib()
