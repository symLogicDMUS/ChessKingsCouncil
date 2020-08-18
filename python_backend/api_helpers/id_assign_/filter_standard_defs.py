import copy
from pprint import pprint
from api_helpers.id_assign_.standard_ids import _standard_ids


def filter_standard_defs(subs):
    """ """
    names = copy.deepcopy(_standard_ids)
    for s in subs.keys():
        del names[subs[s]]
    return names


if __name__ == "__main__":
    pprint(filter_standard_defs({'Jester': 'Queen', 'Duke': 'Bishop'}))
