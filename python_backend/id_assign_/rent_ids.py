import copy
import random
from id_assign_.ids_for_rent import _ids_for_rent
from pprint import pprint


def rent_ids(id_dict, custom_names, ignore=[]):
    """extend id_dict by rentring available assign_ids for custom_names"""
    ids = copy.deepcopy(_ids_for_rent)
    random.shuffle(ids)
    for name in custom_names:
        if name in ignore:
            continue
        id_ = ids.pop(0)
        id_dict[id_] = name
    return id_dict


if __name__ == "__main__":
    pprint(rent_ids({'b': 'Duke', 'q': 'Jester'}, ['Joker', 'Morty']))
