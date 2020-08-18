import copy
import random
from api_helpers.id_assign_.ids_for_rent import _ids_for_rent
from pprint import pprint


# TODO: add restricton against more than 20 ids
def rent_ids(id_dict, custom_names, ignore=[]):
    """for custom pieces not subbing in for a standard (these are pawn promotion options), pick id from the 20 alphabet
       characters not used by a standard piece.
    """
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
