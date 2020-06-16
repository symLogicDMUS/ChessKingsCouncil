from pprint import pprint
from custom.build_range_dict.filter_standards import filter_standards
from custom.build_range_dict.sub_ids import sub_ids
from custom.build_range_dict.rent_ids import rent_ids
from custom.build_range_dict.special_defs import _special_defs as special_dict
from custom.build_range_dict.get_standard_ids import get_standard_ids
from helpers.step_funcs import *


def build_range_dict(custom_dict, subs):
    """
    """
    id_dict = sub_ids(subs)
    id_dict = rent_ids(id_dict, custom_dict.keys(), ignore=subs.keys())
    id_dict.update(get_standard_ids(exclude=subs.values()))
    standard_dict = filter_standards(subs)
    standard_dict.update(custom_dict)
    standard_dict.update(special_dict)
    return id_dict, standard_dict


if __name__ == "__main__":
    pprint(build_range_dict({'Jester': {"spans": [step_1sqr45d, step_1sqr315d], "offsets": []},
                             'Duke': {"spans": step_func_list, "offsets": [[1, 1], [2, 1], [3, 1]]},
                             'Joker': {'spans': [step_1sqr315d, step_1sqr270d, step_1sqr225d],
                                       'offsets': [[1, 3], [1, -3]]},
                             'Morty': {'spans': [step_1sqr90d, step_1sqr0d, step_1sqr45d],
                                       'offsets': [[2, 1], [2, -2]]}},

                            {'Jester': 'Queen', 'Duke': 'Bishop'}))
