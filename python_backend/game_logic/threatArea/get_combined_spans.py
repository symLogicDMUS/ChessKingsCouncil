from game_logic.threatArea.get_range_instance import get_range_instance
from pprint import pprint


def get_combined_spans(range_defs, color):
    """ """
    spans = []
    for name in range_defs.keys():
        spans.extend(get_range_instance(range_defs, name, color, "spans"))
    spans = list(set(spans))
    return spans


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
    pprint(get_combined_spans(range_defs, "W"))
    pprint(get_combined_spans(range_defs, "B"))