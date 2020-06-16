import copy
from pprint import pprint
from custom.build_range_dict.standard_defs import _standard_defs


def filter_standards(subs):
    """ """
    names = copy.deepcopy(_standard_defs)
    for s in subs.keys():
        del names[subs[s]]
    return names


if __name__ == "__main__":
    pprint(filter_standards({'Jester': 'Queen', 'Duke': 'Bishop'}))
