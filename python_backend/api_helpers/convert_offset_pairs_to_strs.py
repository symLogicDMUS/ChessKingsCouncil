import json
from pprint import pprint
from api_helpers.init_empty_ranges import init_empty_ranges


def convert_offset_pairs_to_strs(offsets):
    """convert offsets from form [x,y] to form 'x,y' """
    new_offsets = []
    for offset in offsets:
        new_offsets.append("{},{}".format(offset[0], offset[1]))
    return new_offsets


if __name__ == "__main__":
    evilMorty = {
        "B": {
            "img": "evil_morty_red.svg",
            "offsets": [
                [2, -1],
                [1, -2],
                [-1, -2],
                [-2, -1],
                [-2, 1],
                [-1, 2],
                [1, 2],
                [2, 1]
            ],
            "spans": [
                "step_1sqr270d",
                "step_1sqr225d",
                "step_1sqr180d",
                "step_1sqr135d",
                "step_1sqr90d",
                "step_1sqr45d",
                "step_1sqr0d",
                "step_1sqr315d"
            ]
        },
        "W": {
            "img": "evil_morty_white.svg",
            "offsets": [
                [-2, 1],
                [-1, 2],
                [1, 2],
                [2, 1],
                [2, -1],
                [1, -2],
                [-1, -2],
                [-2, -1]
            ],
            "spans": [
                "step_1sqr90d",
                "step_1sqr45d",
                "step_1sqr0d",
                "step_1sqr315d",
                "step_1sqr270d",
                "step_1sqr225d",
                "step_1sqr180d",
                "step_1sqr135d"
            ]
        }
    }
    pprint(convert_offset_pairs_to_strs(evilMorty['W']['offsets']))
    pprint(convert_offset_pairs_to_strs(evilMorty['B']['offsets']))
