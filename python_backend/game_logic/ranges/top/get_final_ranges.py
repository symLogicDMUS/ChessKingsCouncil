from game_logic.restriction.restriction import restriction
from game_logic.piece_type.get_piece_type import get_piece_type


def get_final_ranges(init_ranges, pins, threat_area, final_ranges, mt_restriction):
    """the final range is the intersection of the initial range, pin, threat area, and multi-threat restriction
    :param init_ranges:
    :param pins:
    :param threat_area:
    :param final_ranges:
    :param mt_restriction:
    :return:
    """
    for id_ in final_ranges.keys():
        if get_piece_type(id_) == 'K':
            final_ranges[id_] = init_ranges[id_]
        else:
            final_ranges[id_] = list(set(init_ranges[id_]) & restriction(pins[id_]) & restriction(threat_area) & restriction(mt_restriction[id_]))
    return final_ranges


if __name__ == "__main__":
    pass  # TODO: implement test for the final ranges
