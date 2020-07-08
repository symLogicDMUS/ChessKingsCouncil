
def get_range_instance(range_defs, piece_name, color, range_type):
    """get range of range_type of the piece named piece_name of enemy color"""
    return range_defs[piece_name][color][range_type]


if __name__ == "__main__":
    range_defs = \
        {
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
        }
    print(get_range_instance(range_defs, "Rook", "W", "spans"))
    print(get_range_instance(range_defs, "Rook", "W", "offsets"))
    print(get_range_instance(range_defs, "Queen", "B", "spans"))
    print(get_range_instance(range_defs, "Queen", "B", "offsets"))