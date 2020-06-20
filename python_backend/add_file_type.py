import json
import os


def add_file_type(folder, extention):
    """ """
    for game_name in os.listdir("./{}".format(folder)):
        f = open('./{}/{}/{}.{}'.format(folder, game_name, game_name, extention), 'w')
        f.close()


def add_data(folder, data, extention):
    """ """
    for game_name in os.listdir("./{}".format(folder)):
        with open('./{}/{}/{}.{}'.format(folder, game_name, game_name, extention), 'w') as outfile:
            json.dump(data, outfile, indent=4, sort_keys=False)
        outfile.close()


if __name__ == "__main__":
    add_file_type("example_games", "ids")
    add_file_type("saved_games", "ids")

    add_data("example_games", {"Knight": {"offsets": [[1, 2],
                                                      [-1, 2],
                                                      [1, -2],
                                                      [-1, -2],
                                                      [2, 1],
                                                      [-2, 1],
                                                      [2, -1],
                                                      [-2, -1]],
                                          "spans": []},
                               "Rook": {"offsets": [],
                                        "spans": ["step_1sqr0d",
                                                  "step_1sqr90d",
                                                  "step_1sqr180d",
                                                  "step_1sqr270d"]},
                               "Bishop": {"offsets": [],
                                          "spans": ["step_1sqr45d",
                                                    "step_1sqr135d",
                                                    "step_1sqr225d",
                                                    "step_1sqr315d"]},
                               "Queen": {"offsets": [],
                                         "spans": ["step_1sqr0d",
                                                   "step_1sqr90d",
                                                   "step_1sqr180d",
                                                   "step_1sqr270d",
                                                   "step_1sqr45d",
                                                   "step_1sqr135d",
                                                   "step_1sqr225d",
                                                   "step_1sqr315d"]}
                               }, "defs")
    add_data("saved_games", {"Knight": {"offsets": [[1, 2],
                                                    [-1, 2],
                                                    [1, -2],
                                                    [-1, -2],
                                                    [2, 1],
                                                    [-2, 1],
                                                    [2, -1],
                                                    [-2, -1]],
                                        "spans": []},
                             "Rook": {"offsets": [],
                                      "spans": ["step_1sqr0d",
                                                "step_1sqr90d",
                                                "step_1sqr180d",
                                                "step_1sqr270d"]},
                             "Bishop": {"offsets": [],
                                        "spans": ["step_1sqr45d",
                                                  "step_1sqr135d",
                                                  "step_1sqr225d",
                                                  "step_1sqr315d"]},
                             "Queen": {"offsets": [],
                                       "spans": ["step_1sqr0d",
                                                 "step_1sqr90d",
                                                 "step_1sqr180d",
                                                 "step_1sqr270d",
                                                 "step_1sqr45d",
                                                 "step_1sqr135d",
                                                 "step_1sqr225d",
                                                 "step_1sqr315d"]}
                             }, "defs")

    add_data("example_games", {"k": "King", "q": "Queen", "r": "Rook", "b": "Bishop", "n": "Knight", "p": "Pawn"}, "ids")
    add_data("saved_games", {"k": "King", "q": "Queen", "r": "Rook", "b": "Bishop", "n": "Knight", "p": "Pawn"}, "ids")
