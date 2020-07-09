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
    # add_file_type("example_games", "ids")
    # add_file_type("saved_games", "ids")

    add_data("saved_games", {
        "Bishop": {
            "B": {
                "img": "BB.svg",
                "offsets": [],
                "spans": [
                    "step_1sqr225d",
                    "step_1sqr315d",
                    "step_1sqr45d",
                    "step_1sqr135d"
                ]
            },
            "W": {
                "img": "WB.svg",
                "offsets": [],
                "spans": [
                    "step_1sqr45d",
                    "step_1sqr135d",
                    "step_1sqr225d",
                    "step_1sqr315d"
                ]
            }
        },
        "Brian": {
            "B": {
                "img": "black_brian.svg",
                "offsets": [
                    [
                        2,
                        0
                    ],
                    [
                        1,
                        0
                    ],
                    [
                        1,
                        -1
                    ],
                    [
                        0,
                        -1
                    ],
                    [
                        0,
                        -2
                    ],
                    [
                        -1,
                        -1
                    ],
                    [
                        -1,
                        0
                    ],
                    [
                        -2,
                        0
                    ],
                    [
                        -1,
                        1
                    ],
                    [
                        0,
                        2
                    ],
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        1
                    ]
                ],
                "spans": []
            },
            "W": {
                "img": "white_brian.svg",
                "offsets": [
                    [
                        -2,
                        0
                    ],
                    [
                        -1,
                        0
                    ],
                    [
                        -1,
                        1
                    ],
                    [
                        0,
                        1
                    ],
                    [
                        0,
                        2
                    ],
                    [
                        1,
                        1
                    ],
                    [
                        1,
                        0
                    ],
                    [
                        2,
                        0
                    ],
                    [
                        1,
                        -1
                    ],
                    [
                        0,
                        -2
                    ],
                    [
                        0,
                        -1
                    ],
                    [
                        -1,
                        -1
                    ]
                ],
                "spans": []
            }
        },

        "Knight": {
            "B": {
                "img": "BN.svg",
                "offsets": [
                    [
                        -1,
                        -2
                    ],
                    [
                        -1,
                        2
                    ],
                    [
                        1,
                        -2
                    ],
                    [
                        1,
                        2
                    ],
                    [
                        -2,
                        -1
                    ],
                    [
                        -2,
                        1
                    ],
                    [
                        2,
                        -1
                    ],
                    [
                        2,
                        1
                    ]
                ],
                "spans": []
            },
            "W": {
                "img": "WN.svg",
                "offsets": [
                    [
                        1,
                        2
                    ],
                    [
                        1,
                        -2
                    ],
                    [
                        -1,
                        2
                    ],
                    [
                        -1,
                        -2
                    ],
                    [
                        2,
                        1
                    ],
                    [
                        2,
                        -1
                    ],
                    [
                        -2,
                        1
                    ],
                    [
                        -2,
                        -1
                    ]
                ],
                "spans": []
            }
        },
        "Queen": {
            "B": {
                "img": "BQ.svg",
                "offsets": [],
                "spans": [
                    "step_1sqr180d",
                    "step_1sqr225d",
                    "step_1sqr270d",
                    "step_1sqr315d",
                    "step_1sqr0d",
                    "step_1sqr90d",
                    "step_1sqr45d",
                    "step_1sqr135d"
                ]
            },
            "W": {
                "img": "WQ.svg",
                "offsets": [],
                "spans": [
                    "step_1sqr0d",
                    "step_1sqr45d",
                    "step_1sqr90d",
                    "step_1sqr135d",
                    "step_1sqr180d",
                    "step_1sqr225d",
                    "step_1sqr270d",
                    "step_1sqr315d"
                ]
            }
        },
        "Rook": {
            "B": {
                "img": "BR.svg",
                "offsets": [],
                "spans": [
                    "step_1sqr180d",
                    "step_1sqr270d",
                    "step_1sqr0d",
                    "step_1sqr90d"
                ]
            },
            "W": {
                "img": "WR.svg",
                "offsets": [],
                "spans": [
                    "step_1sqr0d",
                    "step_1sqr90d",
                    "step_1sqr180d",
                    "step_1sqr270d"
                ]
            }
        }
    }, "defs")
    # add_data("saved_games", {
    #     "Rook": {
    #         "W": {
    #             "spans": [
    #                 "step_1sqr0d",
    #                 "step_1sqr90d",
    #                 "step_1sqr180d",
    #                 "step_1sqr270d"
    #             ],
    #             "offsets": []
    #         },
    #         "B": {
    #             "spans": [
    #                 "step_1sqr180d",
    #                 "step_1sqr270d",
    #                 "step_1sqr0d",
    #                 "step_1sqr90d"
    #             ],
    #             "offsets": []
    #         }
    #     },
    #     "Bishop": {
    #         "W": {
    #             "spans": [
    #                 "step_1sqr45d",
    #                 "step_1sqr135d",
    #                 "step_1sqr225d",
    #                 "step_1sqr315d"
    #             ],
    #             "offsets": []
    #         },
    #         "B": {
    #             "spans": [
    #                 "step_1sqr225d",
    #                 "step_1sqr315d",
    #                 "step_1sqr45d",
    #                 "step_1sqr135d"
    #             ],
    #             "offsets": []
    #         }
    #     },
    #     "Queen": {
    #         "W": {
    #             "spans": [
    #                 "step_1sqr0d",
    #                 "step_1sqr45d",
    #                 "step_1sqr90d",
    #                 "step_1sqr135d",
    #                 "step_1sqr180d",
    #                 "step_1sqr225d",
    #                 "step_1sqr270d",
    #                 "step_1sqr315d"
    #             ],
    #             "offsets": []
    #         },
    #         "B": {
    #             "spans": [
    #                 "step_1sqr180d",
    #                 "step_1sqr225d",
    #                 "step_1sqr270d",
    #                 "step_1sqr315d",
    #                 "step_1sqr0d",
    #                 "step_1sqr90d",
    #                 "step_1sqr45d",
    #                 "step_1sqr135d"
    #             ],
    #             "offsets": []
    #         },
    #
    #     },
    #     "Knight": {
    #         "W": {
    #             "spans": [],
    #             "offsets": [
    #                 [
    #                     1,
    #                     2
    #                 ],
    #                 [
    #                     1,
    #                     -2
    #                 ],
    #                 [
    #                     -1,
    #                     2
    #                 ],
    #                 [
    #                     -1,
    #                     -2
    #                 ],
    #                 [
    #                     2,
    #                     1
    #                 ],
    #                 [
    #                     2,
    #                     -1
    #                 ],
    #                 [
    #                     -2,
    #                     1
    #                 ],
    #                 [
    #                     -2,
    #                     -1
    #                 ]
    #             ]
    #         },
    #         "B": {
    #             "spans": [],
    #             "offsets": [
    #                 [
    #                     -1,
    #                     -2
    #                 ],
    #                 [
    #                     -1,
    #                     2
    #                 ],
    #                 [
    #                     1,
    #                     -2
    #                 ],
    #                 [
    #                     1,
    #                     2
    #                 ],
    #                 [
    #                     -2,
    #                     -1
    #                 ],
    #                 [
    #                     -2,
    #                     1
    #                 ],
    #                 [
    #                     2,
    #                     -1
    #                 ],
    #                 [
    #                     2,
    #                     1
    #                 ]
    #             ]
    #         }
    #     }
    # }, "defs")

    # add_data("example_games", {"k": "King", "q": "Queen", "r": "Rook", "b": "Bishop", "n": "Knight", "p": "Pawn"},"ids")
    # add_data("saved_games", {"k": "King", "q": "Queen", "r": "Rook", "b": "Bishop", "n": "Knight", "p": "Pawn"},"ids")
